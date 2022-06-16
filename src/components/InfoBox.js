// Box for displaying the title and poster for a show that's clickable 

const InfoBox = ({img, title, media_type, key}) => {
    
    return (
        <div className="infoboxDiv">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{media_type}</p>
        </div>
    )
}

export default InfoBox