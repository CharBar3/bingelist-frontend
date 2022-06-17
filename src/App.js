import './App.css';
import Search from './pages/Search';
import Home from './pages/Home';
import { useState, useEffect } from 'react'
import { auth } from './services/firebase'
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import SeriesShow from './pages/SeriesShow';



function App() {
  // const [ user, setUser ] = useState(null)

  // user token add to requests to express
// const token = await user.getIdToken()
// console.log(token)

// NEEDS TO BE ADDED TO FETCH REQUESTS TO THE BACKEND (TOEKN IS ATTACHED TO USER)
// const response = await fetch(URL, {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Bearer ' + token
//   }
// })
  
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])
  
  return (
    <div className="App">
      <Home />
      <Search/>
      <Dashboard />
      <SeriesShow />
    </div>
  );
}

export default App;
