import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "./cartSlice";
import { Button, List } from "antd";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Your Cart</h2>
      <List
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>,
            ]}
          >
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: 200,
                      height: 200,
                      objectFit: "cover",
                      marginLeft: 10,
                    }}
                  />
                }
                title={item.title}
                description={`Price: $${item.price} × ${item.quantity}`}
              />
            </List.Item>
          </List.Item>
        )}
      />
      {cartItems.length > 0 && (
        <Button danger onClick={() => dispatch(clearCart())}>
          {" "}
          Clear Cart
        </Button>
      )}
    </div>
  );
};

export default Cart;
