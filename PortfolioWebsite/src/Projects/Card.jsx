import "./card.css"

function Card (props) {
    const imgsrc = props.imgsrc
    const cardTitle = props.cardTitle
    const cardText = props.cardText

    return(
        <>

        <div className="card project-card" >
            <img src={imgsrc} className="card-img-top" alt="card thumbnail"/>
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href="#" className="btn btn-primary">Visit Project</a>
            </div>
        </div>
        </>
    )
}

export default Card;