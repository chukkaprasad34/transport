import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import HistoryCard from '../components/HistoryCard';


export default function History() {
const [search, setSearch] = useState('');
const bookings = JSON.parse(localStorage.getItem('transportBookings')) || [];


const filtered = bookings.filter(b =>
b.pickup.toLowerCase().includes(search.toLowerCase()) ||
b.drop.toLowerCase().includes(search.toLowerCase()) ||
b.passenger.toLowerCase().includes(search.toLowerCase())
);


return (
<div className="history-container">
<h1>Booking History</h1>
<SearchBar setSearch={setSearch} />


{filtered.map((b, i) => (
<HistoryCard key={i} data={b} index={i} />
))}
</div>
);
}