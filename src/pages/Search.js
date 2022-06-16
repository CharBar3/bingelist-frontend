import { useState } from 'react'
import InfoBox from '../components/InfoBox'

const Search = () => {
    // API key
    const API_key = "b9c2c073ec0a83e5114de86de84f79b2"

    // State Variables
    const [URL, setURL] = useState('')
    const [searchBar, setSearchBarState] = useState('')
    const [showSearch, setShowSearch] = useState('no results yet')

    // api search function
    const apiSearch = async () => {
        const response = await fetch (URL)
        const data = await response.json()
        return searchResults(data)
    }

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
   
    // function that sets the URL called based on searchbar text
    const handleSubmit = e => {
        e.preventDefault()
        const searchBarInfo = e.target.searchBar.value
        setURL(`https://api.themoviedb.org/3/search/multi?api_key=${API_key}&language=en-US&query=${searchBarInfo}&page=1&include_adult=false`)
        apiSearch()
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