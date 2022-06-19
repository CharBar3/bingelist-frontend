import React from 'react'
import { login, logout } from '../services/firebase'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  // redirects to the index/show page for all shows/ on login
  // const loginRedirect = () => {
    
  //   login()
  //   console.log("login clicked, redirecting to /bingelist (index show page)")
  //   navigate('/bingelist')
  // }

  return (
    <div className='container'>
         <h3>BingeList</h3>
         <div className="menu">
                {/* <a href="" className="is-active">Home</a>
                <a href="">About</a>
                <a href="">Contact</a> */}
                <button onClick={login}>login</button>
                <button onClick={logout}>logout</button>
        </div>
    </div>
    
  )
}

export default NavBar