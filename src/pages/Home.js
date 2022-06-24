//home/login page with about info
import { Link } from "react-router-dom";
import About from "../components/About";


const Home = (props) => {
  

  return (
      <div className="home">
        <h1>Home Page</h1>

        {props.user 
        // So this is the same as before, if user is logged in display Link
        // else show the about info
        ? <Link to = '/bingelist/dashboard'>
          <div>Click here to continue to your Dashbaord</div>
        </Link>
        
        : <About />
}
      </div>
  )
}

export default Home