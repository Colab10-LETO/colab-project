import React from 'react'
import { GoogleMap, useLoadScript, Marker, Infowindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
}



export default function Map() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
   
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps...';

  return (
     <div>
       <GoogleMap mapContainerStyle={mapContainerStyle}
       zoom={8} center={center}></GoogleMap>
     </div>
  )
     
}





