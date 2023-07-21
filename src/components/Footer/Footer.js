import React from "react";
import small_logo from "../../assets/small_logo.png";
import "./Footer.styles.css";

const Footer = () => {
    return (
        <footer>
            <section>
                <div>
                    <img src={small_logo} alt="Logo" />
                </div>
                <div>
                    <h3>Sitemap</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                    <li>Address: Chicago</li>
                        <li>Phone Number: 0123456789</li>
                        <li>Email: info@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
