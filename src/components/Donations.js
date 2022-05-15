import { useState, useEffect } from "react";
import Fallbackimage from "../assets/place_filler_image.png";

const Donations = () => {
    const [userInput, setUserInput] = useState("");
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
      setSearchTerm(userInput);
      setSearchLocation(userLocation);
      setUserInput("");
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
        "params[term]": "donation",
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
  
    return (
      <div>
        <div>
          <form onSubmit={handleSubmitting}>
            <label className="locationInput Label" htmlFor="location">
              Search Donation Locations &nbsp;
            </label>
            <input
              type="text"
              id="location"
              placeholder="enter zip code"
              value={userLocation}
              onChange={shopInputting}
            />
            <button>Search</button>
          </form>
          <ul className="shopList">
            {userShopSearch.map((donate) => {

              return (
                <li key={donate.id}>
                  <div className="shopContainer" key={donate.id}>
                    <div className="shopImage">
                      <img
                        src={donate.image_url} alt={donate.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = Fallbackimage;
                        }}
                      />
                    </div>
                    <div className="shopInfo">
                      <div className="shopNameAndType">
                        <h2>{donate.name}</h2>
                        <p>Rating: {donate.rating}/5 ({donate.review_count})</p>
                        <p className="shopType">{donate.categories[0].title}</p>
                      </div>
                      <a href={"geo:" + [donate.coordinates.latitude, donate.coordinates.longitude]} target={'_blank'} rel='noreferrer'>
                          
                        <p>
                          {donate.location.address1} {donate.location.address2}
                        </p>
                        <p>{donate.location.city}</p>
                      </a>
                      <p>
                        <a href={"tel:" + donate.phone}>{donate.phone}</a>
                      </p>
                      <a href={'https://maps.google.com/?q=' + donate.location.address1} target={'_blank'} rel='noreferrer'>
                          <p className="moreInfo">Get Directions</p>
                      </a>
                      </div>
                  </div>
                  
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
  export default Donations;