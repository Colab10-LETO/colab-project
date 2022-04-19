import React from 'react'
import { useState, useEffect } from 'react';

export default function Yelp() {

 const [userLocationInput, setUserLocationInput] = useState('');
 const [userLocation, setUserLocation] = useState('');
 const [resultsLimit, setResultsLimit] = useState();

 const handleSubmit = (event) => {
   event.preventDefault();
   setUserLocationInput(event.target.value);
 }

 useEffect(() => {
   setResultsLimit(20);

   const proxiedUrl = 'https://api.yelp.com/v3/businesses/search';
   const apiKey = `${process.env.YELP_API}`;
   const url = new URL('https://proxy.hackeryou.com');
   url.search = new URLSearchParams({
     reqURL: proxiedUrl,
     'params[key]': apiKey,
     'params[term]': 'thrift_stores',
     'params[location]': userLocation,
     'params[limit]': resultsLimit,
     'proxyHeaders[Authorization]': `Bearer ${apiKey}`,
    });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.businesses) {
          userLocationInput(data.businesses);
        } 
      });
 }, [userLocation, resultsLimit]);

  return (
    <div>
      
    </div>
  )
}

//{process.env.YELP_API}