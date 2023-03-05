import { ReactElement } from 'react'
// import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactElement<any, string | React.JSXElementConstructor<any>>
  path?: string
}

function ProtectedRoute({ children, path }: Props) {
  // if (path === '/') {
  // ...
  // }

  return children
}
export default ProtectedRoute
