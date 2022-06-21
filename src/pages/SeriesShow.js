import NavBar from "../components/NavBar";
import InfoBox from "../components/InfoBox";
import PrevEp from "../components/PrevEp";
import NextEp from "../components/NextEp";
import { useParams } from "react-router-dom";

const SeriesShow = (props) => {
  let params = useParams();

  const id = params.id
  const show = props.dashboardShows.find(s => s._id === id);

 
  console.log(show.showTitle)

  return (
  <>
    <div>
      <h1>Show Page for Series</h1>
      <h2>{show.showTitle}</h2>
      <h3>Seaons: {show.seasons.length}</h3>
      <InfoBox />
      {/* <PrevEp /> */}
      {/* <NextEp /> */}
    </div>
  </>
  )
}

export default SeriesShow