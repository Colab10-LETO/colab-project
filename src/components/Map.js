import React, { useState } from 'react'
import { GoogleMap, Marker, Infowindow, LoadScript,  } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
}



const Map = () => {
  
  const [lat, setLat] = useState([])
  const [lng, setLng] = useState([])




 
  return (
     <div>
       <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
       <GoogleMap mapContainerStyle={mapContainerStyle}
        zoom={8} center={center}>
       </GoogleMap>
       </LoadScript>
     </div>
  )
     
}





