import { useEffect } from "react";

const SeriesShow = ({ dashboardShows, getShows }) => {
  useEffect(() => {
    getShows()
  }, [])
  
  console.log(dashboardShows)

  return (
    <>
      <div className="seriesShow">
        <h1>House</h1>
        <div className="episodeCard">
          <button className="epButton" id="prevEp">Previous Episode</button>
          <h3 id="title">Ep. Title: Paternity</h3>
          <h3 id="number">Ep. Number: 2</h3>
          <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/11961ace2524b24881c41ad410895885f02a9783d77c8c3716006b70d7e82607._UY500_UX667_RI_V_TTW_.jpg" />
          <button className="epButton" id="nextEp">Next Episode</button>
        </div>
        <div className="comments"></div>
        <div className="seasonSelector">

        </div>
      </div>
    </>
  )
}

export default SeriesShow