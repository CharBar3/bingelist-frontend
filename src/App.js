import './App.css';
import Search from './pages/Search';
import Home from './pages/Home';
import { useState, useEffect } from 'react'
import { auth } from './services/firebase'
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import SeriesShow from './pages/SeriesShow';
import { Routes, Route } from 'react-router-dom';

function App() {

// Holds user informatoin from Firebase
const [ user, setUser ] = useState(null)

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
  return () => {
    unsubscribe()
  }
}, [])

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

const URL = 'https://binge-list-project.herokuapp.com/bingelist/'
// const URL = 'http://localhost:4000/bingelist'


const [dashboardShows, setDashboardShows] = useState([])

const addToBingeList = async (tvShowAdd) => {
  if(!user) return;
  const token = await user.getIdToken()
  await fetch(URL, {
      method: 'POST',
      headers: {
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
      }, 
      body: JSON.stringify(tvShowAdd)
  })
}

const getShows = async () => {
  if(!user) return;
  const token = await user.getIdToken()
  const response = await fetch(URL
    , {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  )
  const data = await response.json()
  setDashboardShows(data)
}

const createShow = async (show) => {
  // if(!user) return;
  const token = await user.getIdToken()
  await fetch(URL, {
    method: "POST",
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(show)
  });
  getShows();
};

const updateShow = async (updatedShow, id) => {
  if(!user) return;
  const token = await user.getIdToken()
  await fetch(URL + id, {
    method: "PUT",
    headers: {
      'Content-type': 'Application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(updatedShow)
  });
  getShows();
};

const deleteShow = async (id) => {
  if(!user) return;
  const token = await user.getIdToken()
  await fetch(URL + id, {
    method: "DELETE",
    headers: {
    'Authorization': 'Bearer ' + token
    }
  });
  getShows();
};
  


  return (
    <div className="App">

      <NavBar user  = {user}/>
      <Routes>
        <Route path="bingelist" element={<Home user = {user}/>} />
        <Route path="bingelist/search" element={<Search createShow={createShow} addToBingeList={addToBingeList} user={user}/>} />
        <Route path="bingelist/dashboard" element=
          {
            <Dashboard
              getShows={getShows} 
              dashboardShows={ dashboardShows }
              deleteShow={deleteShow}
              user={user}
            />
          } />

        <Route path="bingelist/:id" element=
          {
            <SeriesShow 
              getShows={ getShows }
              updateShow={updateShow} 
              dashboardShows={dashboardShows} 
            />
          } 
        />  
      </Routes>
    </div>
  );
}

export default App;
