//index page for list of movies/shows
import NavBar from "../components/NavBar";
const Dashboard = (props) => {
  return (
    <>
      <NavBar />
      <div>
        <h1>BingeList Dashboard</h1>
        <button onClick={() => props.getShows()}>getShows</button>
      </div>
      
      {props.dashoboardShows.map((show, i) => {
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
}

export default Dashboard