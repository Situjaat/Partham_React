import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";

const Form = () => {
  const FORM_INITIAL_DATA = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: ""
  };

  const [formData, setFormData] = useState(FORM_INITIAL_DATA);
  const [cardData, setCardData] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData([...cardData, formData]);
    setFormData(FORM_INITIAL_DATA);
  };

  return (
    <>
      <div className="container mt-4">
        <h4 className="mb-3">User Form</h4>
        <form onSubmit={handleSubmit} className="border p-4 mb-4 bg-light rounded">
             
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleFormChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleFormChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleFormChange}  />
          </div>

          <button type="submit">Submit</button>
        </form>

        {/* Cards Section */}
        <div className="row">
            <h3> User List</h3>
          {cardData.map((card, index) => (
            <div className="col-md-4 mb-3" key={index}>
          <Card card={card}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;
