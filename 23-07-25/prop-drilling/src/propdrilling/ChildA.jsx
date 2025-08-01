import GrandChildA from "./GrandChildA";

const ChildA = (props) => {
    return(
        <>
        <h1> This is Child A</h1>
        <h6>{props.heading}</h6>

        <p> {props.userProps?.name}</p>

        <GrandChildA userData={props.userProps}/>
        </>
    )
}
export default ChildA;