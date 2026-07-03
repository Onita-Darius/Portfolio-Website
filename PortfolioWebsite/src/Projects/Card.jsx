import "./card.css"

function Card (props) {
    const imgsrc = props.imgsrc
    const cardTitle = props.cardTitle
    const cardText = props.cardText

    return(
        <div className="card">
            <img src={imgsrc} alt="thumbnail"></img>
            <h2 className="cardTitle">{cardTitle}</h2>
            <p className="cardText">{cardText}</p>
        </div>
    )
}

export default Card;