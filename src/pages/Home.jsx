import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import Summary from "../components/Summary";

export default function Home() {
  const [latestBooking, setLatestBooking] = useState(
    JSON.parse(localStorage.getItem("latestBooking"))
  );

  return (
    <div className="container">
      <BookingForm setLatestBooking={setLatestBooking} />
      <Summary data={latestBooking} />
    </div>
  );
}
