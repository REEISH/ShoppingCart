import "../styles/Navbar.css";
import { Link } from "react-router";

function Navbar() {
  const cartItemCount = 3;
  return (
    <nav className="Navbar">
      <div className="NavbarLogo">
        <Link to="/">🛍️ MockStore</Link>
      </div>

      <ul className="NavbarLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="CartLink">
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="CartBadge">{cartItemCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
