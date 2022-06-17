import React from 'react'
import { login, logout } from '../services/firebase'

function NavBar() {
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