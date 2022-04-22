import React from 'react'
import { GoogleMap } from 'google-maps-react'

function Map(){
  return <GoogleMap defaultZoom={10} defaultCenter={{lat:12, lng:12}} />;
}

export default function Map() {
  return (
    <div>Map</div>
  )
}
