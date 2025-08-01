// import { useNavigate } from "react-router-dom";
// import { usePost } from "../context/PostProvider";

// const Post = () => {
//     const navigate = useNavigate();
//     const {postData} = usePost();

//     return (
//         <>
//         <h1> No Posts Availeble</h1>
//         <button onClick={() => navigate("/createpost")}>
//             Create Post

//         </button>

//         <div>
//             {postData.map((item, index) => (
//                 <div key={index}>
//                 <p> Title :{item?.title}</p>
//                 <p> Body: {item?.body}</p>
//                 <p> Author: {item?.author}</p>
//                 </div>
//             ))}
//         </div>
//         </>
//     )
// }
// export default Post;

import { useNavigate } from "react-router-dom";
import { usePost } from "../context/PostProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = () => {
  const navigate = useNavigate();
  const { postData } = usePost();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Posts</h2>
        <button
          className="btn btn-success"
          onClick={() => navigate("/createpost")}
        >
          Create Post
        </button>
      </div>

      {/* If no posts available */}
      {postData.length === 0 ? (
        <div className="alert alert-warning">No posts available</div>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {postData.map((item, index) => (
              <div className="col-md-4 mb-4 d-flex" key={index}>
                <div className="card shadow-sm w-75 d-flex h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title text-info">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                  </div>
                  <div className="card-footer text-muted text-center">
                    Author: <strong>{item.author}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
