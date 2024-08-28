import React, { useEffect, useState } from 'react';
import Families from './components/Families';
import WomenSafeSpaces from './components/WomenSafeSpaces';
import CouplesActivities from './components/CouplesActivities';
import MapView from './components/MapView';

function App() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch('https://maps2.columbus.gov/arcgis/rest/services/Schemas/RecreationParks/MapServer/2/query?outFields=*&where=1%3D1&f=geojson')
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error('Error fetching GeoJSON data:', error));
  }, []);

  const latitude = 39.9612; // Columbus, OH
  const longitude = -82.9988;
  const zoomLevel = 13;

  return (
    <div>
      <Families />
      <WomenSafeSpaces />
      <CouplesActivities />
      <MapView latitude={latitude} longitude={longitude} zoomLevel={zoomLevel} data={geoData} />
    </div>
  );
}

export default App;
