import "../styles/Home.css";
import { Link } from "react-router";

function Home() {
  return (
    <div className="HomeContainer">
      <section className="Hero">
        <div className="HeroContent">
          <h1>Upgrade Your Setup</h1>
          <p>
            Discover the best gear for your workspace and gaming station.
            High-quality products, unbeatable prices.
          </p>
          <Link to="/shop" className="Button">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="Features">
        <div className="FeatureCard">
          <h3>🚀 Fast Shipping</h3>
          <p>Get your gear delivered anywhere in 2-3 business days.</p>
        </div>
        <div className="FeatureCard">
          <h3>🛡️ Secure Checkout</h3>
          <p>Your data and payments are 100% safe and encrypted.</p>
        </div>
        <div className="FeatureCard">
          <h3>↩️ 30-Day Returns</h3>
          <p>Not completely satisfied? Send it back for a full refund.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
