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
const [ user, setUser ] = useState(null)

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

const URL = 'http://localhost:4000/bingelist/'

const [dashboardShows, setDashboardShows] = useState([])


const getShows = async () => {
  // if(!user) return;
  // const token = await user.getIdToken()
  // console.log(token)
  const response = await fetch(URL
  //   , {
  //   method: 'GET',
  //   headers: {
  //     'Authorization': 'Bearer ' + token
  //   }
  // }
  )
  const data = await response.json()
  console.log({data})
  setDashboardShows(data)
}

const createShow = async (show) => {
  if(!user) return;
  const token = await user.getIdToken()
  console.log(token)
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
  console.log(token)
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
  console.log(token)
  await fetch(URL + id, {
    method: "DELETE",
    'Authorization': 'Bearer ' + token
  });
  getShows();
};
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <button onClick={getShows}>getShows</button>
      <Routes>
        <Route path="bingelist" element={<Home />} />
        <Route path="bingelist/search" element={<Search createShow={createShow} />} />
        <Route path="bingelist/dashboard" element=
          {
            <Dashboard
              getShows={getShows} 
              dashboardShows={ dashboardShows }
              deleteShow={deleteShow}
            />
          } />
        {/* >
          <Route path=":id" element=
            {
              <SeriesShow
                updateShow={updateShow}
                dashboardShows={dashboardShows}
              />
            }
          />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
