import { useState, useEffect } from "react";
import Fallbackimage from "../assets/place_filler_image.png";

const Yelp = () => {
  const [userInputting, setUserInputting] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [resultsLimit, setResultsLimit] = useState();
  const [userShopSearch, setUserShopSearch] = useState([]);

  const shopInputting = (event) => {
    setUserLocation(event.target.value);
  };

  const handleSubmitting = (event) => {
    event.preventDefault();
    setSearchTerm(userInputting);
    setSearchLocation(userLocation);
    setUserInputting("");
    setUserLocation("");
  };

  useEffect(() => {
    setResultsLimit(20);

    const proxiedUrl = "https://api.yelp.com/v3/businesses/search";
    const apiKey = process.env.REACT_APP_YELP_API;
    const url = new URL("https://proxy.hackeryou.com");
    url.search = new URLSearchParams({
      reqUrl: proxiedUrl,
      "params[key]": apiKey,
      "params[term]": "thrift",
      "params[location]": searchLocation,
      "params[limit]": resultsLimit,
      "proxyHeaders[Authorization]": `Bearer ${apiKey}`,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.businesses) {
          setUserShopSearch(data.businesses);
        }
      });
  }, [searchTerm, searchLocation, resultsLimit]);

  console.log(userShopSearch);

  //render a button that will link to the Maps page
  //render in coordinates that will bring up the searched coordinate
  //hypothetically, now that the map is a child to yelp and header, and therefore app
  //we can pass down the lat and lng state

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitting}>
          <label className="locationInput Label" htmlFor="location">
            Where are you?
          </label>
          <input
            type="text"
            id="location"
            value={userLocation}
            onChange={shopInputting}
          />
          <button>Search</button>
        </form>
        <ul className="shopList">
          {userShopSearch.map((shop) => {
            return (
              <li key={shop.id}>
                <div className="shopContainer" key={shop.id}>
                  <div className="shopImage">
                    <img
                      src={shop.image_url} alt={shop.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = Fallbackimage;
                      }}
                    />
                  </div>
                  <div className="shopInfo">
                    <div className="shopNameAndType">
                      <h2>{shop.name}</h2>
                      <p>Rating: {shop.rating}/5 ({shop.review_count})</p>
                      <p className="shopType">{shop.categories[0].title}</p>
                    </div>
                    <a className='shopAddress' href={"geo:" + [shop.coordinates.latitude, shop.coordinates.longitude]} target={'_blank'} rel='noreferrer'>
                        
                      <p>
                        {shop.location.address1} {shop.location.address2}
                      </p>
                      <p>{shop.location.city}</p>
                    </a>
                    <p>
                      <a href={"tel:" + shop.phone}>{shop.phone}</a>
                    </p>
                    
                    <a href={shop.url} target={'_blank'} rel='noreferrer'>
                      <p>More Info</p>
                    </a>
                    <a className='getDirections' href={'https://maps.google.com/?q=' + shop.location.address1} target={'_blank'} rel='noreferrer'>
                        <p className="moreInfo">Get Directions</p>
                    </a>
                    </div>
                </div>
                
              </li>
            );
          })}
        </ul>
        {/* <Map latitude={searchLocation.latitude} longitude={searchLocation.longitude} /> */}
      </div>
    </div>
  );
};

export default Yelp;
