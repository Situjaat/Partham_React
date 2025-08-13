import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector ((state) => state.auth.user) 
return (
  <div>
   <h4> welCome on My Page mr <h1>{user?.name} </h1> </h4> 
  </div>
)
};

export default Dashboard;
