import './assets/scss/global.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { ProfilePage } from './pages/profile/ProfilePage'
import { LoginPage } from './pages/login/LoginPage'
import { JuniorListPage } from './pages/junior-list/JuniorListPage'
import { SignUpPage } from './pages/sign-up/SignUpPage'

function App() {
  return (
    <div className="App">
      <div className="temp-nav">
        <Link to={'/'}>home</Link>
        <Link to={'/list'}>list</Link>
        <Link to={'/sign-in'}>sign-in</Link>
        <Link to={'/sign-up'}>sign-up</Link>
        <Link to={'/profile/userId'}>profile</Link>
      </div>

      <Routes>
        <Route path="/profile/:userId" element={<ProfilePage />} />

        <Route path="/list" element={<JuniorListPage />} />

        <Route path="/sign-in" element={<LoginPage />} />

        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  )
}

export default App
