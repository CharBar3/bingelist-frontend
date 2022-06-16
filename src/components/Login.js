//login form for home page

import { login, logout } from '../services/firebase';

const Login = (props) => {
  return (
    <div>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Login