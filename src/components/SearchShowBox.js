

const SearchShowBox = ({title, background, description}) => {
    return (
        <>
        <h1 
        style={{
            backgroundImage: `url(${background})`,
            width: '800px',
            height: '100px',
        }}
        >{title}</h1>
        {/* <img src={background} alt={background} /> */}
        </>
    )
}

export default SearchShowBox