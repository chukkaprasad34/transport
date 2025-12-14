import { useState, useRef } from "react";

const PRICE = {
  Car: 15,
  Auto: 10,
  MiniBus: 25
};

const vehicleImages = {
  Car: "/images/car.png",
  Auto: "/images/auto.png",
  MiniBus: "/images/minibus.png"
};

function BookingForm() {
  const [popup, setPopup] = useState(false);
  const [latestBooking, setLatestBooking] = useState(null);

  // ✅ define formRef
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      pickup: e.target.pickup.value,
      drop: e.target.drop.value,
      date: e.target.date.value,
      passenger: e.target.passenger.value,
      distance: Number(e.target.distance.value),
      vehicle: e.target.vehicle.value,
      fare:
        Number(e.target.distance.value) *
        PRICE[e.target.vehicle.value],
      img: vehicleImages[e.target.vehicle.value]
    };

    localStorage.setItem("latestBooking", JSON.stringify(data));

    let history =
      JSON.parse(localStorage.getItem("transportBookings")) || [];
    history.push(data);
    localStorage.setItem(
      "transportBookings",
      JSON.stringify(history)
    );

    setLatestBooking(data);
    setPopup(true);

    setTimeout(() => setPopup(false), 1500);
  }

  // 🔄 Reset only form
  function resetForm() {
    formRef.current.reset();
  }

  // 🆕 New booking (clear summary + reset form)
  function newBooking() {
    localStorage.removeItem("latestBooking");
    setLatestBooking(null);
    formRef.current.reset();
  }

  return (
    <>
      <form
        className="booking-form"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <input type="text" name="pickup" placeholder="Pickup" required />
        <input type="text" name="drop" placeholder="Drop" required />
        <input type="date" name="date" required />
        <input
          type="text"
          name="passenger"
          placeholder="Passenger Name"
          required
        />
        <input
          type="number"
          name="distance"
          placeholder="Distance (KM)"
          required
        />

        <select name="vehicle" required>
          <option value="">Select Vehicle</option>
          <option value="Car">Car</option>
          <option value="Auto">Auto</option>
          <option value="MiniBus">Mini Bus</option>
        </select>

        <button type="submit">Book Now</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>

        {popup && (
          <div className="success-popup">
            Booking Successful 🎉
          </div>
        )}
      </form>

      {/* ✅ Latest Booking Display */}
      {latestBooking && (
        <div className="latest-booking">
          <h3>Latest Booking</h3>
          <p><strong>Passenger:</strong> {latestBooking.passenger}</p>
          <p><strong>Vehicle:</strong> {latestBooking.vehicle}</p>
          <p><strong>Distance:</strong> {latestBooking.distance} KM</p>
          <p><strong>Fare:</strong> ₹{latestBooking.fare}</p>

          <button onClick={newBooking}>
            New Booking
          </button>
        </div>
      )}
    </>
  );
}

export default BookingForm;
