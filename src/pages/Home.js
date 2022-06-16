//home/login page with about info
import Login from "../components/Login"
import { auth } from "../services/firebase"
import { useEffect, useState } from "react"

const Home = () => {
  const [ user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <div>Home Page
      <Login user={user} /> 
    </div>
  )
}

export default Home