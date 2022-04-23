import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map() {


  return (
    <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{ lat: 12, lng: 12 }} />
  );
  }

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
return (
  <div>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`} loadingElement={<div style={{height: '100%'}} />} />
  </div>
);
}






