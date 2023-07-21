import React from "react";
import { useState } from "react";
import "./BookingForm.styles.css";
const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header className="bookingform-header">
      <section className="bookingform-section">
        <form className="bookingform-form" onSubmit={handleSumbit}>
          <fieldset className="bookingform-fieldset">
            <div className="bookingform-bookdate-container">
              <label className="bookingform-bookdate-label" htmlFor="book-date">
                Choose Date
              </label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
                className="bookingform-bookdate-input"
              />
            </div>
            <div className="bookingform-booktime">
              <label className="bookingform-booktime-label" htmlFor="book-time">
                Choose Time
              </label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
                className="bookingform-booktime-select"
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>
            <div className="bookingform-bookgeusts">
              <label
                className="bookingform-bookgeusts-label"
                htmlFor="book-guests"
              >
                Number of Guests
              </label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                type={"number"}
                placeholder={0}
                max={10}
                required
                className="bookingform-bookgeusts-input"
              ></input>
            </div>
            <div className="bookingform-bookoccasion">
              <label
                className="bookingform-bookoccasion-label"
                htmlFor="book-occasion"
              >
                Occasion
              </label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                className="bookingform-bookoccasion-select"
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="bookingform-submit">
              <input
                aria-label="On Click"
                type={"submit"}
                value={"Make Your Reservation"}
                className="bookingform-button"
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
