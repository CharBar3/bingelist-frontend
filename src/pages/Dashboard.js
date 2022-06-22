//index page for list of movies/shows
import { useEffect } from "react";
import {  Link } from 'react-router-dom'
const Dashboard = ({dashboardShows, getShows }) => {
  console.log("dashboard loaded")

  useEffect(() => {
    getShows()
  }, [])

  // const hasData = () => {
  return (
    <>
    <header className="dashHeader">
      <h1 className="bingeH1">Your BingeList</h1>
    </header>
      <div className="dashContainer">
    {dashboardShows.map((show, i) => {
        return (
          <Link to={`/bingeList/${show._id}`}>
          
          <div key={i} className="showContainer">
              <h1>{show.showTitle}</h1>
              <h3>Seaons: {show.seasons.length}</h3>
              <h3>User Rating: {show.userRating}</h3>
          </div>
          </Link>
        );
      })}
    </div> 
    </>  
  )}

export default Dashboard