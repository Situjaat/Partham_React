// import React, { useState, useEffect } from "react";
// import { usePost } from "../context/PostProvider";
// import { useNavigate } from "react-router-dom";
// import { useLogin } from "../context/LoginUserProvider";

// const INITIAL_FORM_VALUE = {
//     title: "",
//     body: "",
//     author: "",
// } ;

// const CreatePost = () => {
//     const { userLogin } = useLogin();
//     const { setPostData } = usePost();
//     const navigate = useNavigate();
//     const [createPost, setCreatePost] = useState(INITIAL_FORM_VALUE);

//     useEffect(() => {
//         if (userLogin?.firstname) {
//             setCreatePost((prev) => ({
//                 ...prev,
//                 author: userLogin?.firstname,
//             }));
//         }
//     }, [userLogin]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCreatePost((prev) => ({ ...prev, [name]: value }));
//     };

//     const validate = () => {
//         let newArr = {};
//         if (!createPost?.title) newArr.title = "Please Fill Title Field";
//         if (!createPost?.body) newArr.body = "Please fill body Filed";
//         if (!createPost?.author) newArr.author = "Please select role";
//         return newArr;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let newArrError = validate();
//         if (Object.keys(newArrError).length > 0) {
//             const firstError = Object.values(newArrError).find((err) => err);
//             (firstError);
//         } else {
//             setPostData((prev) => [...prev, createPost]);
//             setCreatePost(INITIAL_FORM_VALUE);
//             navigate("/post");
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-amber-600 underline">Hello world!</h1>

//             <form onSubmit={handleSubmit}>
//                 <label>Title</label>
//                 <input
//                     type="text"
//                     name="title"
//                     value={createPost.title}
//                     onChange={handleChange}
//                 />
//                 <label>Body</label>
//                 <span>*</span>
//                 <input
//                     type="text"
//                     name="body"
//                     value={createPost.body}
//                     onChange={handleChange}
//                 />
//                 <label>Author</label>
//                 <input
//                     type="text"
//                     name="author"
//                     value={userLogin?.firstname}
//                     onChange={handleChange}
//                     readOnly // ✅ Optional: make it read-only so user can't change
//                 />
//                 <button type="submit">Create Post</button>
//             </form>
//         </div>
//     );
// };

// export default CreatePost;




import React, { useState, useEffect } from "react";
import { usePost } from "../context/PostProvider";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginUserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const INITIAL_FORM_VALUE = {
  title: "",
  body: "",
  author: "",
};

const CreatePost = () => {
  const { userLogin } = useLogin();
  const { setPostData } = usePost();
  const navigate = useNavigate();
  const [createPost, setCreatePost] = useState(INITIAL_FORM_VALUE);
  const [errors, setErrors] = useState({});
console.log(userLogin);

  useEffect(() => {
    if (userLogin?.firstname) {
      setCreatePost((prev) => ({
        ...prev,
        author: userLogin.firstname,
      }));
    }
  }, [userLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePost((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!createPost.title.trim()) newErrors.title = "Please fill the title field";
    if (!createPost.body.trim()) newErrors.body = "Please fill the body field";
    if (!createPost.author.trim()) newErrors.author = "Author not set";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setPostData((prev) => [...prev, createPost]);
      setCreatePost(INITIAL_FORM_VALUE);
      setErrors({});
      navigate("/post");
    }
  };

  return (
    <div className="container mt-5 m-auto">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={createPost.title}
              onChange={handleChange}
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              placeholder="Enter post title"
            />
            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              name="body"
              value={createPost.body}
              onChange={handleChange}
              className={`form-control ${errors.body ? "is-invalid" : ""}`}
              placeholder="Enter post body"
              rows={4}
            />
            {errors.body && <div className="invalid-feedback">{errors.body}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              type="text"
              name="author"
              value={createPost.author}
              readOnly
              className="form-control bg-light"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
