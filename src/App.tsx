import './assets/scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './cmps/ProtectedRoute'
import HomePage from './pages/home-page/HomePage'
import ProfilePage from './pages/profile-page/ProfilePage'

function App() {
  return (
    <div className="App">
      <div className="temp-nav">
        <Link to={'/'}>Home</Link>
        <Link to={'/profile/some-id'}>Profile</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute path="/">
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:userId"
          element={
            <ProtectedRoute path="/profile/:userId">
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  )
}

export default App
