//index page for list of movies/shows
import { useEffect } from "react";
const Dashboard = ({dashboardShows, getShows }) => {
  useEffect(() => {
    getShows()
  }, [])

  // const hasData = () => {
  return (
    <>
      <div>
        <h1>BingeList Dashboard</h1>
        <button onClick={() => getShows()}>getShows</button>
      </div>
      
      {dashboardShows.map((show, i) => {
        return (
          <div key={i}>
            <h1>Title:{show.showTitle}</h1>
            <h3>Seaons: {show.seasons.length}</h3>
            <h3>User Rating: {show.userRating}</h3>
          </div>
        );
      })}
    </>  
  )
  // }

  // const noData = () => {
  //   return (
  //     <div>
  //       <h1>BingeList Dashboard</h1>
  //       <button onClick={() => getShows()}>getShows</button>
  //     </div>
  //   )
  // }

  // return dashboardShows ? hasData() : noData()
}

export default Dashboard