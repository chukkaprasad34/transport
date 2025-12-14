import React from 'react';


export default function SearchBar({ setSearch }) {
return (
<input
type="text"
placeholder="Search by pickup, drop, passenger..."
onChange={(e) => setSearch(e.target.value)}
className="search"
/>
);
}