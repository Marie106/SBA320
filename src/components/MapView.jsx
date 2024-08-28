import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ latitude, longitude, zoomLevel, data }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = L.map('map').setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapInstance.current);

    if (data) {
      L.geoJSON(data).addTo(mapInstance.current);
    }

    mapRef.current = mapInstance.current;

  }, [latitude, longitude, zoomLevel, data]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapView;
