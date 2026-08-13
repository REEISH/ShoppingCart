import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  if (cart.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
        <Link to="/shop">Go back to the Shop</Link>
      </div>
    );
  }
  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Your Shopping Cart</h2>

      <div style={{ borderBottom: "2px solid #ccc", marginBottom: "20px" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
              paddingBottom: "15px",
              borderBottom: "1px solid #eee",
            }}
          >
            <div style={{ flex: 2 }}>
              <strong>{item.name}</strong>
              <p style={{ margin: "5px 0", color: "gray" }}>
                ${item.price.toFixed(2)} each
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => decreaseQuantity(item.id)}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                -
              </button>
              <span
                style={{
                  fontWeight: "bold",
                  minWidth: "20px",
                  textAlign: "center",
                }}
              >
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.id)}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                +
              </button>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "5px",
              }}
            >
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              <button
                onClick={() => removeItem(item.id)}
                style={{
                  color: "red",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                  textDecoration: "underline",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "right" }}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
