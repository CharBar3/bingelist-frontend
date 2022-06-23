import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeriesShow = ({ dashboardShows, getShows, updateShow, user }) => {

  let params = useParams()  

  const [tvShow, updateTvShow] = useState(dashboardShows.find(element => element._id === params.id))

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
        
        <div className="showPageContainer">
          <h3 className="item1">Season {index + 1} Episode {episodeNumber}</h3>
          <h4 className="item2">Title {episodeTitle}</h4>
          <input type="checkbox" name='watched' onChange={(e) => handleChange(e, index, episodeNumber)} checked={watched}/>
        </div>
        
      )

      })
   )
  })

  return (
    <>
    <h1 className="showPageh1">{tvShow.showTitle}</h1>
    
    <div className="wrapper">
      
      {seasons}
    
    </div>
    </>
  )
}

export default SeriesShow