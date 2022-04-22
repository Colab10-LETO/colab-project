import React from 'react'
import Yelp from '../components/Yelp/Yelp'
import Map from '../components/Map/Map'
//Either routes or turnery for the buttons on the bottom (which still might change)
//rfc allows you to import in everyting you need to start the file

export default function Home() {

  return (
  <>
  <Map />
  <Yelp />
  </>
  )
}
