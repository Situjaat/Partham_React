import { useEffect, useRef, useState } from "react";

const Products1 = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const limit = 10;

  const fetchProducts = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}&offset=${(page - 1) * limit}`
    );
    const data = await response.json();
    return data;
  };

  const loadMore = async () => {
    const newProducts = await fetchProducts();
    if (newProducts.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...newProducts]);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    loadMore(); // Load first page
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore,page,loaderRef]);

  return (
    <div className="app" style={{ padding: "20px" }}>
      <h1>Product List</h1>

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

      {hasMore ? (
        <div ref={loaderRef} style={{ padding: "20px", textAlign: "center" }}>
          Loading more...
        </div>
      ) : (
        <div style={{ padding: "20px", textAlign: "center" }}>
          All products loaded
        </div>
      )}
    </div>
  );
};

export default Products1;
