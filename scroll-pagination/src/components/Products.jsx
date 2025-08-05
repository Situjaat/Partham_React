import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    const limit = 10;
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}&offset=${(page - 1) * limit}`
    );
    const data = await response.json();
    return data;
  };

  const loadMore = async () => {
    const newProducts = await fetchProducts(page);
    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadMore(); // Load first set
  }, []);

  return (
    <div className="app" style={{ padding: "20px" }}>
      <h1>Product List</h1>

      <InfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen all products.</b>
          </p>
        }
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <h3>{product.title}</h3>
              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
