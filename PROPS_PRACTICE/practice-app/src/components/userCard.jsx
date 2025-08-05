const Usercard = (props) => {
    const {user} = props;
    return (
        <>
        <div style={{width:"200px", height:"200px", border:"1px solid black"}}>
            <h6> {user.name}</h6>
            <h6>{user.age}</h6>
            <h6> {user.gender}</h6>
        </div>
        
        </>
    )
}
export default Usercard ;