import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test("renders the logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders the sitemap", () => {
    render(<Footer />);
    const sitemap = screen.getByText("Sitemap");
    expect(sitemap).toBeInTheDocument();
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
    const about = screen.getByText("About");
    expect(about).toBeInTheDocument();
    const menu = screen.getByText("Menu");
    expect(menu).toBeInTheDocument();
    const reservations = screen.getByText("Reservations");
    expect(reservations).toBeInTheDocument();
    const orderOnline = screen.getByText("Order Online");
    expect(orderOnline).toBeInTheDocument();
    const login = screen.getByText("Login");
    expect(login).toBeInTheDocument();
  });

  test("renders the contact information", () => {
    render(<Footer />);
    const contact = screen.getByText("Contact");
    expect(contact).toBeInTheDocument();
    const address = screen.getByText("Address: Chicago");
    expect(address).toBeInTheDocument();
    const phoneNumber = screen.getByText("Phone Number: 0123456789");
    expect(phoneNumber).toBeInTheDocument();
    const email = screen.getByText("Email: info@littlelemon.com");
    expect(email).toBeInTheDocument();
  });

  test("renders the social media links", () => {
    render(<Footer />);
    const socialMediaLinks = screen.getByText("Social Media Links");
    expect(socialMediaLinks).toBeInTheDocument();
    const facebook = screen.getByText("Facebook");
    expect(facebook).toBeInTheDocument();
    const instagram = screen.getByText("Instagram");
    expect(instagram).toBeInTheDocument();
    const whatsapp = screen.getByText("WhatsApp");
    expect(whatsapp).toBeInTheDocument();
  });
});