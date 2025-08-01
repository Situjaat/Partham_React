const Card = ({card}) => {
    console.log(card,'card');
    
    return(
        <>
        <div className="card shadow-sm mb-4" style={{ width: "100%", maxWidth: "400px" }}>
  <div className="card-body">
    <h5 className="card-title">{card.firstName} {card.lastName}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{card.email}</h6>
    <p className="card-text"><strong>Password:</strong> {card.password}</p>
    <p className="card-text"><strong>Age:</strong> {card.age}</p>
  </div>
</div>
  </>
    )
}

export default Card;