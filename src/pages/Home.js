//home/login page with about info
import { Link } from "react-router-dom";
import About from "../components/About";

const Home = (props) => {
  

  return (
      <div>
        <h1>Home Page</h1>
        {props.user && 
        <Link to = '/bingelist/dashboard'>
          <div>Click here to continue to your Dashbaord</div>
        </Link>
        }
        <About />
      </div>
  )
}

export default Home