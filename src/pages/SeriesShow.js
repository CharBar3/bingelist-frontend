import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SeriesShow = ({ dashboardShows, getShows, updateShow, user }) => {

  let params = useParams()  

  const [tvShow, updateTvShow] = useState(dashboardShows.find(element => element._id === params.id))

  // const handleChange = (e, index, episodeNumber) => {

  //   let newTvShow = tvShow
    
  //   if (tvShow.seasons[index].episodes[episodeNumber - 1].watched === true) {
  //     newTvShow.seasons[index].episodes[episodeNumber - 1].watched = false
  //   } else {
  //     newTvShow.seasons[index].episodes[episodeNumber - 1].watched = true
  //   }

  //   updateTvShow((newTvShow) => {
  //     return newTvShow 
  //   }) 
  //    updateShow(tvShow, params.id)
  // }

  // const handleChange = (e, index, episodeNumber) => {


  //   updateTvShow(prevState => {
  //     const newState = {
  //       ...prevState, 
  //       seasons: prevState.seasons.map((season, seasonIndex) => {
  //         return {
  //           ...season,
  //           episodes: season.episodes.map((episode, episodeIndex) => {
  //             return {
  //               ...episode, 
  //               watched: seasonIndex === index && episodeIndex === episodeNumber-1 ? !episode.watched : episode.watched
  //             }
  //           })
  //         }
  //       }),
  //     }
  //     return newState;
  //   })
  //   updateShow(tvShow, params.id)
  // }

  // see library called immer 
  const handleChange = async (e, index, episodeNumber) => {
    // Creates a constant we are storing what we need for our new state (zach never uses callback ever :] also always update db side before UI side)
    const newState = {
      // spreads out the current state of tvShow *see line 8*
      ...tvShow, 
      // overrite seasons with everything after : "tvShow.seasons.map((season, seasonIndex)"
      seasons: tvShow.seasons.map((season, seasonIndex) => {
        // returning a copy of a single season spread out (doing other things below)
        return {
          ...season,
          episodes: season.episodes.map((episode, episodeIndex) => {
            // returning a copy of a single episode spread out (see logic below)
            return {
              ...episode, 
              // comparing the looped season index to the specific season index and the episode index to the looped epsiode index and returning watched updated if true
              watched: seasonIndex === index && episodeIndex === episodeNumber-1 ? !episode.watched : episode.watched
            }
          })
        }
      }),
    }
    await updateShow(newState, params.id)
    updateTvShow(newState)
  }

  const seasons = tvShow.seasons.map(({episodes}, index)=>{
   return( episodes.map(({episodeNumber, episodeTitle, watched}) => {
      return (
        
        <div className="showPageContainer">
          <h4 className="item1">Season: {index + 1} Episode: {episodeNumber}</h4>
          <h2 className="item2"> {episodeTitle}</h2>
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