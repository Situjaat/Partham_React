import { Badge, Button, Dropdown, Menu } from "antd";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const TopHeader = () => {
    const cartItems = useSelector((state) => state.cart.items);
const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
console.log('cartItems', cartItems, totalCount)
const menu = (
    <Menu style={{width:300}}>
{cartItems.length === 0 ? (
    <Menu.Item disabled> Your cart is empty</Menu.Item>
) : (
    <>
    {cartItems.map((item) => (
        <Menu.Item key={item.id} style={{whiteSpace:"normal"}}>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <div>
                    <strong> {item.title}</strong>
                    <br/> Qty:{item.quantity} * $
                </div>
                <img 
                src={item.image}
                alt={item.title}
                style={{width:50, height:50, objectFit:"cover" , marginLeft:10}}
                />
            </div>
        </Menu.Item>
    ))}
    <Menu.Divider/>
    <Menu.Item>
        <Link to="/cart">
        <Button type="primary" block> Go to Cart</Button>
        </Link>
    </Menu.Item>
    </>
)}
    </Menu>
);
return (
    <Dropdown overlay= {menu} placement="bottomRight" trigger={["click"]}>
        <Badge count={totalCount} showZero>
            {/* <ShoppingCartOutlined style={{fontSize:"24px" , cursor:"pointer", color:"#fff"}}/> */}
        </Badge>
    </Dropdown>
)
};

export default TopHeader;