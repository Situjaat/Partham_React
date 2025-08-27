// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// const UserDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.user.userData);
//   const user = users.find((u) => u.id === parseInt(id));

//   if (!user) {
//     return <h3 className="text-center mt-5">Loading user details...</h3>;
//   }

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="card shadow-lg p-4 w-50">
//           <h2 className="text-primary">{user.name}</h2>
//           <h5 className="text-muted">{user.email}</h5>
//           <p>
//             <strong>Username:</strong> {user.username}
//           </p>
//           <p>
//             <strong>Phone:</strong> {user.phone}
//           </p>
//           <p>
//             <strong>Website:</strong> {user.website}
//           </p>
//           <p>
//             <strong>Address:</strong> {user.address.street},{" "}
//             {user.address.suite}, {user.address.city}, {user.address.zipcode}
//           </p>
//           <p>
//             <strong>Company:</strong> {user.company.name} -{" "}
//             {user.company.catchPhrase}
//           </p>
//         </div>
//       </div>
//       <button onClick={() => navigate(-1)} > Back </button>
//     </>
//   );
// };
// export default UserDetails;



import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.userData);
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h3 className="text-center mt-5">Loading user details...</h3>;
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="card shadow-lg p-4 w-75">
          <div className="card-body">
            <h2 className="card-title text-primary mb-3">{user.name}</h2>
            <h5 className="card-subtitle mb-3 text-muted">{user.email}</h5>

            <p className="card-text">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {user.phone}
            </p>
            <p className="card-text">
              <strong>Website:</strong> {user.website}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
            <p className="card-text">
              <strong>Company:</strong> {user.company.name} -{" "}
              {user.company.catchPhrase}
            </p>
          </div>
        </div>
      </div>

      {/* Back button centered below card */}
      <div className="text-center mt-4">
        <button
          className="btn btn-secondary px-4"
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </button>
      </div>
    </>
  );
};

export default UserDetails;

