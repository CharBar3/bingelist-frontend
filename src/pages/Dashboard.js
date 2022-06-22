import { useEffect } from "react";
import { Link } from 'react-router-dom'
const Dashboard = ({dashboardShows, getShows, deleteShow, user }) => {

  useEffect(() => {
    getShows()
  }, [user])


  return (
    <>
    <header className="dashHeader">
      <h1>Your BingeList</h1>
    </header>
      <div className="dashContainer">
    {dashboardShows.map((show, i) => {
        return (
          
          <div key={i} className="showContainer">
              <Link to={`/bingeList/${show._id}`}><h1>{show.showTitle}</h1></Link>
              <h3>Seaons: {show.seasons.length}</h3>
              {/* <h3>User Rating: {show.userRating}</h3> */}
              <button onClick={() => deleteShow(show._id)}> Remove from BingeList</button>
          </div>
          
        );
      })}
    </div> 
    </>  
  )
}

 

  

export default Dashboard