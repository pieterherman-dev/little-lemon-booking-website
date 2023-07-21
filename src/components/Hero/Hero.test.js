import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

describe("Hero component", () => {
  test("renders the title", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const title = screen.getByText(/Little Lemon/i);
    expect(title).toBeInTheDocument();
  });

  test("renders the subtitle", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const subtitle = screen.getByText(/Chicago/i);
    expect(subtitle).toBeInTheDocument();
  });

  test("renders the text", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const text = screen.getByText(
      /We are a family owned Mediterraneran restaurant/i
    );
    expect(text).toBeInTheDocument();
  });

  test("renders the image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
