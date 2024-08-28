import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ latitude, longitude, zoomLevel, data }) => {
  useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    if (data) {
      L.geoJSON(data).addTo(map);
    }
  }, [latitude, longitude, zoomLevel, data]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapView;
