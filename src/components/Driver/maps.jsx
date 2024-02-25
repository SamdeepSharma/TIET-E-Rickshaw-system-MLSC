import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    // Create a Leaflet map centered at [30.3564, 76.3647] with zoom level 15.5
    const map = L.map('map').setView([30.3564, 76.3647], 15.5);

    // Add the base OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
    }).addTo(map);

    // Define markers with coordinates and names
    const markers = [
      { coordinates: [30.3508695, 76.3612381], name: 'Hostel C' },
      { coordinates: [30.3534863, 76.3635498], name: 'Hostel J' },
      { coordinates: [30.3509499, 76.3602690], name: 'Hostel D' },
      { coordinates: [30.3511374, 76.3632293], name: 'Hostel B' },
      { coordinates: [30.3515132, 76.3624623], name: 'Hostel O' },
      { coordinates: [30.3513047, 76.3645508], name: 'Hostel A' },
      { coordinates: [30.3530092, 76.3649750], name: 'Hostel H' },
      { coordinates: [30.3530389, 76.3606600], name: 'Hostel M' },
      { coordinates: [30.3568769, 76.3637607], name: 'Hostel K' },
      { coordinates: [30.3518998, 76.3678058], name: 'Hostel Q' },
      { coordinates: [30.3518372, 76.3667073], name: 'Hostel PG' },
      { coordinates: [30.3531908, 76.3700807], name: 'G-BLOCK' },
      { coordinates: [30.3542763, 76.3695845], name: 'CSED AND LIBRARY' },
      { coordinates: [30.3542763, 76.3714975], name: 'F-BLOCK' },
      { coordinates: [30.3538872, 76.3625969], name: 'COS' },
      { coordinates: [30.3527305, 76.3702731], name: 'JAGGI' },
      { coordinates: [30.3519976, 76.3730264], name: 'MAIN GATE' },
      { coordinates: [30.3542889, 76.3708665], name: 'D-BLOCK' }
  ];
  

    // Add markers with popups to the map
    markers.forEach((marker) => {
      L.marker(marker.coordinates)
        .addTo(map)
        .bindPopup(`<b>${marker.name}</b><br>You are at ${marker.name}.`)
        .openPopup();
    });

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <div id="map" style={{ height: '100vh', width: '100vw' }}></div>;

};

export default MapComponent;
