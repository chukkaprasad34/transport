import React from 'react';


export default function HistoryCard({ data, index }) {
function deleteBooking() {
let history = JSON.parse(localStorage.getItem('transportBookings')) || [];
history.splice(index, 1);
localStorage.setItem('transportBookings', JSON.stringify(history));
window.location.reload();
}


return (
<div className="history-card">
<h3>Booking #{index + 1}</h3>
<p><strong>Pickup:</strong> {data.pickup}</p>
<p><strong>Drop:</strong> {data.drop}</p>
<p><strong>Passenger:</strong> {data.passenger}</p>
<p><strong>Fare:</strong> ₹{data.fare}</p>
<img src={data.img} alt="vehicle" width="120" />


<button className="btn-delete" onClick={deleteBooking}>Delete</button>
</div>
);
}