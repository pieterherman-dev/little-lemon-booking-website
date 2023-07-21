import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  test("renders Greek salad card", () => {
    render(<Card />);
    const greekSaladCard = screen.getByText(/Greek salad/i);
    expect(greekSaladCard).toBeInTheDocument();
  });

  test("renders Bruschetta card", () => {
    render(<Card />);
    const bruschettaCard = screen.getByText(/Bruchetta/i);
    expect(bruschettaCard).toBeInTheDocument();
  });

  test("renders Lemon Bascert card", () => {
    render(<Card />);
    const lemonBascertCard = screen.getByText(/Lemon Bascert/i);
    expect(lemonBascertCard).toBeInTheDocument();
  });
});