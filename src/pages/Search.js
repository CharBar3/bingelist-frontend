import { useState } from 'react'
import InfoBox from '../components/InfoBox'
import SearchShowBox from '../components/SearchShowBox'

const Search = ({ addToBingeList }) => {
    const [showSearch, setShowSearch] = useState('no results yet')

    // const createURL = 'http://localhost:4000/bingelist/'

    // const addToBingeList = async (tvShowAdd) => {
    //     await fetch(createURL, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'Application/json'
    //         }, 
    //         body: JSON.stringify(tvShowAdd)
    //     })
    // }

    const showIdApiCall = async (showID, backdrop_path, poster_path) => {
        const backdrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
        const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`

        const URL = `https://api.themoviedb.org/3/tv/${showID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        const response = await fetch(URL)
        const data = await response.json()

        const seasons = []

        for (let index = 1; index < data.seasons.length; index++) {

            const seasonURL = `https://api.themoviedb.org/3/tv/${showID}/season/${index}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            const response = await fetch(seasonURL)
            const data = await response.json()

            const episodes = []
            for (let i = 0; i < data.episodes.length; i++) {
                const episode = data.episodes[i]
                episodes.push({
                    episodeNumber: episode.episode_number,
                    episodeTitle: episode.name,
                    watched: false,
                    comments: ''
                })
            }
            seasons.push({
                episodes: episodes,
                seasonPoster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            })
        }

        const newBingeListShow = {
            showTitle: data.name,
            userRating: 1,
            showBackdrop: backdrop,
            showPoster: poster,
            seasons: seasons
        }
        addToBingeList(newBingeListShow)
    }


    const searchResults = (data) => {
        const transformedData = data.results.map(({ name, media_type, id, backdrop_path, poster_path, overview }, index,) => {
            if (name && media_type === "tv") {
                const posterSrcConvert = `https://image.tmdb.org/t/p/w500/${poster_path}`
                const backdropSrcConvert = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                return (
                    <div className='search-show'>
                        <SearchShowBox
                            title={name}
                            background={backdropSrcConvert}
                        />
                        <p> {overview} </p>
                        <button onClick={() => showIdApiCall(id, backdrop_path, poster_path)}></button>
                    </div>
                )
            }
        })
        setShowSearch(transformedData)
    }

    // api search function
    const apiSearch = async (URL) => {
        const response = await fetch(URL)
        const data = await response.json()
        return searchResults(data)
    }

    // function that sets the URL called based on searchbar text
    const handleSubmit = e => {
        // Prevents page refresh
        e.preventDefault()
        // Sends URL for API Search  
        apiSearch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${e.target.searchBar.value}&page=1&include_adult=false`)
    }

    return (
        <div className='search-container'>
            <h1 id='search-header'>Series Search</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="searchBar" />
                    <button type='submit'>Search</button>
                </form>
                {showSearch}
            </div>
        </div>
    )
}

export default Search