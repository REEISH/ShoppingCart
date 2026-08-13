import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router";

// import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
