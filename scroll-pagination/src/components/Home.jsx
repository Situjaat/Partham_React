import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState({name:"John Doe"});

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setStudent({name: "john "})
        },2000)
    }, [])
    return (
        <>
<StudentProfile isLoading = {true} name={student.name}/>
        </>
    )
}

export default Home;