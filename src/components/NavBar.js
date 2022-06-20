import React from 'react'
import { login, logout } from '../services/firebase'
import { useNavigate, Link } from 'react-router-dom'

function NavBar() {
  // const navigate = useNavigate()
  // redirects to the index/show page for all shows/ on login
  // const loginRedirect = () => {
    
  //   login()
  //   console.log("login clicked, redirecting to /bingelist (index show page)")
  //   navigate('/bingelist')
  // }

  return (
    <div className='container'>
         {/* <h3>BingeList</h3>
         <div className="menu"> */}
                {/* <a href="" className="is-active">Home</a>
                <a href="">About</a>
                <a href="">Contact</a> */}
                {/* <button onClick={login}>login</button>
                <button onClick={logout}>logout</button>
        </div> */}
        <h1>BingeList</h1>
        <Link to="/bingelist"> Home </Link>
        <Link to="/bingelist/dashboard">Dashboard</Link>
        <Link to="/bingelist/search"> Find New Show! </Link>
        <Link to="/bingelist/about"> About </Link>
    </div>
  )
}

export default NavBar