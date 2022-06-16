import { useState } from 'react'
import InfoBox from '../components/InfoBox'


const Search = () => {
    // const API_Key = process.env.API_KEY
    // State Variables
    const [showSearch, setShowSearch] = useState('no results yet')

    const searchResults = (data) => {
        console.log(data)
        const transformedData = data.results.map(({name, media_type, id, backdrop_path, poster_path}, index) => {
            if (name && media_type === "tv") {
            const srcConvert = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return ( 
            <InfoBox
            title={name}
            media_type={media_type}
            img={srcConvert}
            key={index}
            />
            )
            }
        })
        // console.log(transformedData)
        setShowSearch(transformedData)
    }
    
    // api search function
    const apiSearch = async (URL) => {
        console.log(URL)
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
        <h1>App Search</h1>
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