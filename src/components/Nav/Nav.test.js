import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav component", () => {
  test("renders logo", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const logo = screen.getByAltText("logo from little lemon");
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const menuLink = screen.getByText("Menu");
    const reservationsLink = screen.getByText("Reservations");
    const orderOnlineLink = screen.getByText("Order Online");
    const loginLink = screen.getByText("Login");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderOnlineLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});