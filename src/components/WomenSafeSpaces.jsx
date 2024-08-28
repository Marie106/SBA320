import React from 'react';
import { useSelector } from 'react-redux';

const WomenSafeSpaces = () => {
  const places = useSelector((state) => state.places);

  return (
    <div>
      <h1>Women's Safe Spaces</h1>
      <ul>
        {places.map((place) => (
          <li key={CFV7ek4ehKxvJtt8iYMu6S2hQ}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WomenSafeSpaces;
