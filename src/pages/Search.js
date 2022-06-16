import { useState } from 'react'

const Search = () => {
    // state to handle the URL changing based on search
    const [URL, setURL] = useState('')
    const [searchBar, setSearchBarState] = useState('')
    // api key to be moved to .env file later
    const API_key = "b9c2c073ec0a83e5114de86de84f79b2"

    const [showSearch, setShowSearch] = useState('yeet')

    // api search function
    const apiSearch = async () => {
        const response = await fetch (URL)
        const data = await response.json()
        console.log(data)
        
        const transformedData = data.results.map(({name, media_type, id, backdrop_path, poster_path}, index) => {
            // console.log({element.name})
            const srcConvert = `https://image.tmdb.org/t/p/w500/${poster_path}`
            return ( 
            <div className='showSearch' >
            <img src={srcConvert} alt="" />
            <p>{name}</p>
            <p>{media_type}</p>
            </div>
            )
        })


        console.log(transformedData)
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