import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "./cartSlice";
import { Button, List } from "antd";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "700" }}>🛒 Your Cart</h2>

      <List
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item
            style={{
              padding: "16px",
              border: "1px solid #f0f0f0",
              borderRadius: "12px",
              marginBottom: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            actions={[
              <Button
                danger
                size="small"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: "8px",
                    objectFit: "cover",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
                  }}
                />
              }
              title={
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
                  {item.title}
                </span>
              }
              description={
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Price:{" "}
                  <span style={{ color: "#000", fontWeight: "500" }}>
                    ${item.price}
                  </span>{" "}
                  × {item.quantity}
                </span>
              }
            />
          </List.Item>
        )}
      />

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button danger onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
