import React from 'react'
import { login, logout } from '../services/firebase'
import {  Link } from 'react-router-dom'
// figure out how to make fabars icon appear later
// import{FaBars, FaTimes} from 'react-icons/fa'

function NavBar(props) {
  // const navigate = useNavigate()
  // redirects to the index/show page for all shows/ on login
  // const loginRedirect = () => {
    
  //   login()
  //   console.log("login clicked, redirecting to /bingelist (index show page)")
  //   navigate('/bingelist')
  // }



  return (

    <div className='navBarContainer'>

        <h1 className='logo'>BingeList</h1>
        
    <nav>
        <Link to="/bingelist/dashboard" className='navLink'> Home </Link>

        {/* <Link to="/bingelist/dashboard">Dashboard</Link> */}

        <Link to="/bingelist/search" className='navLink'> Add New </Link>

        {/* This line of code shows the user whether they are logged in or not so the ? and the : 
        are just like if else statements */}
        
        { props.user
        ? <p onClick= {logout} className="login"> Logout</p>
        : <p onClick= {login} className="login" > Login</p>
        }
        <button className='hamburger'>
          <span></span>
          <span></span>
          <span></span>
        </button>
    
    </nav>
    

    </div>
  )
}

export default NavBar