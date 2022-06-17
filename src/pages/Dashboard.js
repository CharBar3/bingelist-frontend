//index page for list of movies/shows
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = (props) => {

  return (
    <>
      <NavBar />
      <div>
        <h1>BingeList Dashboard</h1>
      </div>
    </>  
  )
}

export default Dashboard