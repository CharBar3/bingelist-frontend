import { useState } from 'react'
import InfoBox from '../components/InfoBox'
import NavBar from '../components/NavBar'


const Search = () => {
    // State Variables
    const [showSearch, setShowSearch] = useState('no results yet')

    const createURL = 'http://localhost:4000/bingelist/'

    const addToBingeList = async (tvShowAdd) => {
        console.log(JSON.stringify(tvShowAdd))
        await fetch(createURL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            }, 
            body: JSON.stringify(tvShowAdd)
        })
        // const data = await response.json()
        // console.log(data)

      }

    const showIdApiCall = async (showID, backdrop_path, poster_path) => {
        const backdrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
        const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`

        const URL = `https://api.themoviedb.org/3/tv/${showID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        const response = await fetch(URL)
        const data = await response.json()
        console.log(typeof data.seasons.toString())

        const newBingeListShow = {
            showTitle: data.name.toString(),
            userRating: 1,
            showBackdrop: backdrop,
            showPoster: poster,
        }
        console.log(newBingeListShow)
        addToBingeList(newBingeListShow)
    }


    const searchResults = (data) => {
        const transformedData = data.results.map(({name, media_type, id, backdrop_path, poster_path}, index) => {
            if (name && media_type === "tv") {
            const srcConvert = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return ( 
            <>
            <InfoBox
            title={name}
            media_type={media_type}
            img={srcConvert}
            key={index}
            />
            <button onClick={() => showIdApiCall(id, backdrop_path, poster_path)}>Add to BingeList</button>
            </>
            )
            }
        })
        setShowSearch(transformedData)
    }
    
    // api search function
    const apiSearch = async (URL) => {
        const response = await fetch (URL)
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
        <>
            <NavBar />
            <h1>Series Search</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="searchBar"/>
                    <button type='submit'>Search</button>
                </form>
                {showSearch}
            </div>
        </>
    )
}

export default Search