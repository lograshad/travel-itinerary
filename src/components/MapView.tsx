import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapViewProps {
  items: Array<{
    id: string;
    name: string;
    latitude: number;
    longitude: number;
  }>;
}

const MapView: React.FC<MapViewProps> = ({ items }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: items[0]?.latitude || 0,
    lng: items[0]?.longitude || 0
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {items.map((item) => (
          <Marker
            key={item.id}
            position={{ lat: item.latitude, lng: item.longitude }}
            title={item.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;

