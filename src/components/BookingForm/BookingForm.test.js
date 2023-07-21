import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  it("renders correctly", () => {
    const { getByLabelText, getByText } = render(
      <BookingForm
        submitForm={mockSubmitForm}
        dispatch={mockDispatch}
        availableTimes={{ availableTimes: ["10:00", "12:00", "14:00"] }}
      />
    );

    expect(getByLabelText("Choose Date")).toBeInTheDocument();
    expect(getByLabelText("Choose Time")).toBeInTheDocument();
    expect(getByLabelText("Number of Guests")).toBeInTheDocument();
    expect(getByLabelText("Occasion")).toBeInTheDocument();
    expect(getByText("Make Your Reservation")).toBeInTheDocument();
  });

  it("calls submitForm when the form is submitted", () => {
    const { getByText } = render(
      <BookingForm
        submitForm={mockSubmitForm}
        dispatch={mockDispatch}
        availableTimes={{ availableTimes: ["10:00", "12:00", "14:00"] }}
      />
    );

    fireEvent.click(getByText("Make Your Reservation"));

    expect(mockSubmitForm).toHaveBeenCalled();
  });

  it("calls dispatch when the date input is changed", () => {
    const { getByLabelText } = render(
      <BookingForm
        submitForm={mockSubmitForm}
        dispatch={mockDispatch}
        availableTimes={{ availableTimes: ["10:00", "12:00", "14:00"] }}
      />
    );

    fireEvent.change(getByLabelText("Choose Date"), {
      target: { value: "2022-01-01" },
    });

    expect(mockDispatch).toHaveBeenCalledWith("2022-01-01");
  });
});