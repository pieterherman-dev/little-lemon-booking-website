import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedPage from "../pages/ConfirmedPage";
import { Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Booking" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedPage />} />
      </Routes>
    </>
  );
};

export default Navigation;
