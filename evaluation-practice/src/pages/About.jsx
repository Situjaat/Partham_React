import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
     
      <div
        style={{
          display: "flex",
          gap: "20px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p><b>Category:</b> {product.category}</p>
          <p><b>Description:</b> {product.description}</p>
          <p><b>Price:</b> 💲{product.price}</p>
        </div>
        
      </div>
       <button
        onClick={() => navigate(-1)}
        style={{ margin: "20px", padding: "8px 15px", cursor: "pointer" , backgroundColor:"blue", color:"white", fontSize:"18px", borderRadius:'10px', border:"none" }}
      >
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default About;


