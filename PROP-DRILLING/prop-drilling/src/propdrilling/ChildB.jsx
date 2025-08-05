
const ChildB = (props) => {
    const {setUserDetails} = props;
    return (
        <>
        <h2> This is Child B</h2>
        <h6> {props.userDetails?.name}</h6>

        <button onClick={() => setUserDetails({name:"situ", age:20})}> SET USER DATA</button>
        </>
    )
}
export default ChildB;