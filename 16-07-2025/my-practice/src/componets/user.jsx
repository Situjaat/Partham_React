const User = (props) => {
    const {user} = props;
return (
    <>
    <h1> {user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.gender}</h1>
    </>
)

}

export default User;