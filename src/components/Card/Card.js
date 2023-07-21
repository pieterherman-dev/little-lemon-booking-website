import "./Card.styles.css";
import greekSalad from "../../assets/greekSalad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import lemonDessert from "../../assets/lemonDessert.jpg";

const Card = () => {
  return (
    <div className="card-list">
      <div className="card-container">
        <div className="card-image-container">
          <img src={greekSalad} alt="Greek salad" className="card-image" />
        </div>
        <div className="card-details">
          <div className="card-name">
            <p>Greek salad</p>
            <p className="card-price">$12.99</p>
          </div>
          <p className="card-description">
            The famous greck salad of crisoulettuce ceppers olives and eur
            chicago stule fota cheese. garnished with crunchy parlic and
            rosemary croutons.
          </p>
          <div className="card-delivery">
            <p className="card-name">Order a delivery</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-image-container">
          <img src={bruschetta} alt="bruschetta" className="card-image" />
        </div>
        <div className="card-details">
          <div className="card-name">
            <p>Bruchetta</p>
            <p className="card-price">$5.99</p>
          </div>
          <p className="card-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive.
          </p>
          <div className="card-delivery">
            <p className="card-name">Order a delivery</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="card-image-container">
          <img src={lemonDessert} alt="Lemon Dessert" className="card-image" />
        </div>
        <div className="card-details">
          <div className="card-name">
            <p>Lemon Bascert</p>
            <p className="card-price">$5.00</p>
          </div>
          <p className="card-description">
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <div className="card-delivery">
            <p className="card-name">Order a delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
