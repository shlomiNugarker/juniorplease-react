// import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { useAppSelector } from '../../store/hooks'

type Props = {}

export default function HomePage(props: Props) {
  // const navigate = useNavigate()
  const authState = useAppSelector((state: RootState) => state.auth)

  return (
    <section className="home-page">
      <h1>HomePage</h1>
      <p>LoggedUser: {authState.user.fullname}</p>
    </section>
  )
}
