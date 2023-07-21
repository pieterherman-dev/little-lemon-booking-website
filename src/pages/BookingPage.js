import React, { useReducer } from "react";
import { fetchAPI } from "../utils/fetchData";

import Nav from "../components/Nav/Nav";
import BookingForm from "../components/BookingForm/BookingForm";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const submitAPI = function (formData) {
    if (formData) {
      return true;
    }
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <>
      <Nav />
      <main>
        <BookingForm
          availableTimes={state}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
      <Footer />
    </>
  );
};

export default BookingPage;
