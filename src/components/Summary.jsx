import React from 'react';


export default function Summary({ data }) {
if (!data) return <p>No booking yet.</p>;


return (
<div className="summary-box">
<h2>Booking Summary</h2>
<p><strong>Pickup:</strong> {data.pickup}</p>
<p><strong>Drop:</strong> {data.drop}</p>
<p><strong>Date:</strong> {data.date}</p>
<p><strong>Passenger:</strong> {data.passenger}</p>
<p><strong>Distance:</strong> {data.distance} KM</p>
<p><strong>Vehicle:</strong> {data.vehicle}</p>
<p><strong>Fare:</strong> ₹{data.fare}</p>
<img src={data.img} alt="vehicle" width="140" />
</div>
);
}