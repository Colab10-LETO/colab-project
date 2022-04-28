import React from 'react'
import { GoogleMap, LoadScript} from '@react-google-maps/api';

// call in the yelp and map API here
//Pass down from Parent to Child
//Pass in the Map and Yelp API stuff here
//does the yelp api use coordinance 
//if google api = yelp api coordinance, render the location
//response body does return lat and long
//if you get an array of it, you might be able to map through them


const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
}

//hypothetically, if we pass in the latitude and longitude from the app, then when we create markers, we should just be able to declare the logitude and latitude as what we've passed in
 //create Marker here
  //When creating Marker, pass in the lat and long
  //since we are using js instead of jsx, is passing state and params 

const Map = () => {


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

export default Map


