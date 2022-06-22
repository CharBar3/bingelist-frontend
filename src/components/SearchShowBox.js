const SearchShowBox = ({ title, background }) => {
    return (
        <div className="titlecard">
            <h1
                style={{
                    backgroundImage: `url(${background})`
                }}
            >
                {title}
            </h1>
        </div>
    )
}

export default SearchShowBox