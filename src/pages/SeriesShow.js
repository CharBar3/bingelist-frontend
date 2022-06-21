import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeriesShow = ({ dashboardShows, getShows }) => {
  let params = useParams()  
  // const tvShow = dashboardShows.find(element => element._id === params.id)


  const [tvShow, updateTvShow] = useState(dashboardShows.find(element => element._id === params.id))


  // useEffect(() => {
  //   getShows()
  // }, [])






  
  console.log(tvShow)

  const handleChange = (e) => {
    console.log(e.target.name)
    // updateTvShow(prevStat => {
    //   console.log(prevStat)
    // })
  }

  const seasons = tvShow.seasons.map(({episodes}, index)=>{

   return( episodes.map(({episodeNumber, episodeTitle, watched}) => {


      let watchedCheckbox = "null"

      if (watched === true) {
        watchedCheckbox = <input type="checkbox" name={`S${index},E${episodeNumber}`} onClick={handleChange} checked/>
      } else {
        watchedCheckbox = <input type="checkbox" name={`S${index}E${episodeNumber}`} onClick={handleChange} />
      }

      return (
        <div>
          <h3>Season {index + 1} Episode {episodeNumber}</h3>
          <h4>Title {episodeTitle}</h4>
          <p> Watched ? {watchedCheckbox} </p>
        </div>
      )

      })
   )
  })

  return (
    <>
      <h1>{tvShow.showTitle}</h1>
      {seasons}



      {/* <div className="seriesShow">
        <h1>House</h1>
        <div className="episodeCard">
          <button className="epButton" id="prevEp">Previous Episode</button>
          <h3 id="title">Ep. Title: Paternity</h3>
          <h3 id="number">Ep. Number: 2</h3>
          <img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/11961ace2524b24881c41ad410895885f02a9783d77c8c3716006b70d7e82607._UY500_UX667_RI_V_TTW_.jpg" />
          <button className="epButton" id="nextEp">Next Episode</button>
        </div>
        <div className="comments">
          <ul>
            <li>Loved this one!</li>
          </ul>
          <form>
            <label for="userComment">Enter Comment:</label><br />
            <input type="textarea" id="userComment" name="userComment" /><br />
            <input type="submit" id="submitComment" value="Submit Comment" />
          </form>
        </div>
        <div className="seasonSelector">
            <select id="season">
              <option value="Season 1" selected>Season 1</option>
              <option value="Season 2">Season 2</option>
              <option value="Season 3">Season 3</option>
              <option value="Season 4">Season 4</option>
              <option value="Season 5">Season 5</option>
              <option value="Season 6">Season 6</option>
              <option value="Season 7">Season 7</option>
              <option value="Season 8">Season 8</option>
            </select>
            <div id="episodeChecklist">
              <form>
                <label for="ep1">Everybody Lies</label>
                <input type="checkbox" name="ep1" value="Everybody Lies" checked /><br />
                <label for="ep2">Everybody Lies</label>
                <input type="checkbox" name="ep2" value="Paternity" checked /><br />
                <label for="ep3">Everybody Lies</label>
                <input type="checkbox" name="ep3" value="Occam's Razor" /><br />
                <label for="ep4">Everybody Lies</label>
                <input type="checkbox" name="ep4" value="Maternity" /><br />
              </form>
            </div>
        </div>
      </div> */}
    </>
  )
}

export default SeriesShow