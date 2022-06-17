import './App.css';
import Search from './pages/Search';
import Home from './pages/Home';
import { useState, useEffect } from 'react'
import { auth } from './services/firebase'
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import SeriesShow from './pages/SeriesShow';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App(props) {
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

const URL = 'http://localhost:4000/bingelist'

const [dashoboardShows, setDashboardShows] = useState([])

const getShows = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  setDashboardShows(data)
}

  
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
  //   return () => {
  //     unsubscribe()
  //   }
  // }, [])
  
  return (
    <div className="App">
      <button onClick={getShows}>getShows</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="bingelist" element={<Dashboard getShows={getShows} dashoboardShows={dashoboardShows}/>}>
          <Route path=":id" element={<SeriesShow />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
