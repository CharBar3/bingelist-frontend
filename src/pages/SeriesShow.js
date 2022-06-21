import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeriesShow = ({ dashboardShows, getShows, updateShow }) => {

  let params = useParams()  

  const [tvShow, updateTvShow] = useState(dashboardShows.find(element => element._id === params.id))
  console.log(tvShow)

  const handleChange = (e, index, episodeNumber) => {

    let newTvShow = tvShow
    
    if (tvShow.seasons[index].episodes[episodeNumber - 1].watched === true) {
      newTvShow.seasons[index].episodes[episodeNumber - 1].watched = false
    } else {
      newTvShow.seasons[index].episodes[episodeNumber - 1].watched = true
    }

    updateTvShow((newTvShow) => {
      return newTvShow 
    }) 
     updateShow(tvShow, params.id)
  }

  const seasons = tvShow.seasons.map(({episodes}, index)=>{
   return( episodes.map(({episodeNumber, episodeTitle, watched}) => {
      return (
        <div>
          <h3>Season {index + 1} Episode {episodeNumber}</h3>
          <h4>Title {episodeTitle}</h4>
          <input type="checkbox" name='watched' onChange={(e) => handleChange(e, index, episodeNumber)} checked={watched}/>
        </div>
      )

      })
   )
  })

  return (
    <>
      <h1>{tvShow.showTitle}</h1>
      {seasons}
    </>
  )
}

export default SeriesShow