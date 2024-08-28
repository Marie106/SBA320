import React from 'react';
import { useSelector } from 'react-redux';

const Families = () => {
  const places = useSelector((state) => state.places);

  return (
    <div>
      <h1>Family-Friendly Places</h1>
      <ul>
        {places.map((place) => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Families;
