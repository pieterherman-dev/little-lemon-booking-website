import "./Hero.styles.css";
import restaurantFood from "../../assets/restaurantfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero-header">
      <section className="hero">
        <div className="hero-container">
          <h2 className="hero-title">Little Lemon</h2>
          <h3 className="hero-subtitle">Chicago</h3>
          <p className="hero-text">
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/Booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="image-container">
          <img src={restaurantFood} alt="Food from restaurant" />
        </div>
      </section>
    </header>
  );
};

export default Hero;
