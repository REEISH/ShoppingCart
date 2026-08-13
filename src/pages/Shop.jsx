import "../styles/Shop.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const PRODUCTS = [
  { id: 1, name: "Mechanical Keyboard", price: 129 },
  { id: 2, name: "Wireless Gaming Mouse", price: 89 },
  { id: 3, name: "4K UltraWide Monitor", price: 499 },
  { id: 4, name: "Ergonomic Mesh Chair", price: 250 },
  { id: 5, name: "Adjustable Standing Desk", price: 399 },
  { id: 6, name: "Noise-Cancelling Headphones", price: 199 },
  { id: 7, name: "Studio Microphone", price: 149 },
  { id: 8, name: "1080p HD Webcam", price: 69 },
  { id: 9, name: "RGB Extended Mousepad", price: 35 },
  { id: 10, name: "Monitor Light Bar", price: 45 },
  { id: 11, name: "Dual Monitor Arm", price: 75 },
  { id: 12, name: "USB-C Docking Station", price: 110 },
  { id: 13, name: "Cable Management Kit", price: 20 },
  { id: 14, name: "Stream Deck", price: 140 },
  { id: 15, name: "VR Headset", price: 299 },
  { id: 16, name: "Pro Gaming Controller", price: 160 },
  { id: 17, name: "Leather Desk Mat", price: 55 },
  { id: 18, name: "Acoustic Foam Panels", price: 40 },
  { id: 19, name: "Custom Keycap Set", price: 45 },
  { id: 20, name: "Desktop Speakers", price: 85 },
];

function ProductCard({ product, cart, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    let objectUrl;
    const fetchImageUrl = `https://placehold.co/400x300/eeeeee/333333?text=${product.name.split(" ").join("+")}`;
    fetch(fetchImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        setImageSrc(objectUrl);
      })
      .catch((error) => console.error("Error fetching image:", error));
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [product.name]);

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setQuantity(1);
  };

  return (
    <div className="ProductCard">
      {imageSrc ? (
        <img src={imageSrc} alt={product.name} className="ProductImage" />
      ) : (
        <div
          style={{
            height: "300px",
            width: "100%",
            backgroundColor: "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Loading Image...
        </div>
      )}
      <div className="ProductDetails">
        <h3 className="ProductName">{product.name}</h3>
        <p className="ProductPrice">${product.price}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "10px 0",
          }}
        >
          <label
            htmlFor={`qty-${product.id}`}
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            Qty:
          </label>
          <input
            id={`qty-${product.id}`}
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value) || 1)}
            style={{
              width: "60px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button className="ATC" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function Shop() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="ShopContainer">
      <div className="ShopHeader">
        <h2>Workspace & Gaming Gear</h2>
        <p>Level up your setup with our premium selection.</p>
      </div>

      <div className="ProductGrid">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
