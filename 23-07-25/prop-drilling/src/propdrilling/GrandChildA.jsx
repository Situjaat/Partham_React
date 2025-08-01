const GrandChildA = (props) => {
    return (
        <>
        <h1> This is GrandChild A</h1>

        <h6> {props.userData?.age}</h6>
        </>
    )
}

export default GrandChildA;