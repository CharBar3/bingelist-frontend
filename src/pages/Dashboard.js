//index page for list of movies/shows
import NavBar from "../components/NavBar";

const Dashboard = (props) => {
  console.log(props)
  return (
    <>
      <NavBar />
      <div>
        <h1>BingeList Dashboard</h1>
        <button onClick={() => props.getShows()}>getShows</button>
      </div>
    </>  
  )
}

export default Dashboard