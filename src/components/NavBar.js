import React from 'react'
import { login, logout } from '../services/firebase'
import { useNavigate, Link } from 'react-router-dom'

function NavBar(props) {
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
        <Link to="/bingelist/dashboard"> Home </Link>
        {/* <Link to="/bingelist/dashboard">Dashboard</Link> */}
        <Link to="/bingelist/search"> Find New Show! </Link>
        {/* This line of code shows the user whether they are logged in or not so the ? and the : 
        are just like if else statements */}
        { props.user
        ? <p onClick= {logout} > Logout</p>
        : <p onClick= {login} > Login</p>
        }
    </div>
  )
}

export default NavBar