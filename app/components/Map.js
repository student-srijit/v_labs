'use client';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { MdLocationOn, MdScatterPlot } from 'react-icons/md';

const Map = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [markerCluster, setMarkerCluster] = useState(null);
  const [isClusterMode, setIsClusterMode] = useState(true);

  useEffect(() => {
    const initMap = async () => {
      // Fetch coordinates from your API route
      const res = await fetch('/api/coordinates');
      const coordinates = await res.json();

     // console.log('Coordinates:', coordinates); // Debugging

      // Parse latitude and longitude as numbers
      coordinates.forEach(coord => {
        coord.latitude = parseFloat(coord.latitude);
        coord.longitude = parseFloat(coord.longitude);
      });

      // Load Google Maps
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      loader.load().then(() => {
        // Initialize Google Map
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: 22.5937, lng: 77.9629 }, // Center on India
          zoom: 5,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ]
        });

        setMap(mapInstance);

        // Create markers for all coordinates
        const newMarkers = coordinates.map(coord => {
          return new google.maps.Marker({
            position: { lat: coord.latitude, lng: coord.longitude },
            icon: {
              url: `http://maps.google.com/mapfiles/ms/icons/${getRandomColor()}-dot.png`,
            }
          });
        });

        setMarkers(newMarkers);

        // Initialize MarkerClusterer AFTER markers are created
        const cluster = new MarkerClusterer({
          map: mapInstance,
          markers: newMarkers,
          
          renderer: {
            render({ count, position }) {
              const size = Math.min(60, 30 + count * 2); // Dynamic sizing
              const color = getRandomColor(); // Random color for cluster

              return new google.maps.Marker({
                position,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: color,
                  fillOpacity: 0.6,
                  strokeColor: 'white',
                  strokeWeight: 2,
                  scale: size / 2, // Scale circle size
                },
                label: {
                  text: String(count),
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                },
                zIndex: google.maps.Marker.MAX_ZINDEX + 1,
              });
            },
          },
        });

        setMarkerCluster(cluster);

        // Show clusters by default
        cluster.addMarkers(newMarkers);
      });
    };

    initMap();
  }, []);

  // Toggle between Cluster Mode and Marker Mode
  const toggleClusterMode = () => {
    if (isClusterMode) {
      // Enable Marker Mode - Show markers, hide clusters
      markerCluster.clearMarkers();
      markers.forEach(marker => marker.setMap(map));
    } else {
      // Enable Cluster Mode - Hide markers, show clusters
      markers.forEach(marker => marker.setMap(null));
      markerCluster.addMarkers(markers);
    }
    setIsClusterMode(!isClusterMode);
  };

  // Function to pick a random Google Maps marker color
  const getRandomColor = () => {
    const colors = [
      "red", "blue", "green", "yellow", "purple", "pink", "orange"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={{ position: 'relative' }}>
      <div ref={mapRef} style={{ height: '600px', width: '100%' }} />
            
      <button 
  onClick={toggleClusterMode} 
  style={{
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)', // Centers the button vertically
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '56px',
    height: '56px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  title={isClusterMode ? "Switch to Markers" : "Switch to Clusters"}
>
  {isClusterMode ? (
    <MdLocationOn 
      style={{
        color: '#3f51b5',
        fontSize: '28px',
        transition: 'transform 0.3s ease',
        transform: 'rotate(360deg)',
      }}
    />
  ) : (
    <MdScatterPlot 
      style={{
        color: '#3f51b5',
        fontSize: '28px',
        transition: 'transform 0.3s ease',
        transform: 'rotate(0deg)',
      }}
    />
  )}
</button>

    </div>
  );
};

export default Map;
