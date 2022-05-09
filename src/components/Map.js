import React from 'react'
import { GoogleMap, useLoadScript, LoadScript, Marker, Infowindow } from '@react-google-maps/api';
// call in the yelp and map API here
//Pass down from Parent to Child
//Pass in the Map and Yelp API stuff here
//does the yelp api use coordinance 
//if google api = yelp api coordinance, render the location
//response body does return lat and long
//if you get an array of it, you might be able to map through them

//or, add a button on the yelp page that Links to the map page, and pop in the lon and lat that way

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
}



export default function Map({latitude, longitude}) {
  
  // const [lat, setLat] = useState([])
  // const [lng, setLng] = useState([])


  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
   
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps...';

  return (
    <div>
      
    
    <GoogleMap mapContainerStyle={mapContainerStyle}
     zoom={8} center={center}>
    </GoogleMap>
    <Marker position={{lat: latitude, lng: longitude}} />
   
  </div>
  )
     
}





