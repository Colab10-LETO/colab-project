import { useState, useEffect } from 'react';



const Yelp = () => {

    const [userInputting, setUserInputting] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [resultsLimit, setResultsLimit] = useState();
    const [userShopSearch, setUserShopSearch] = useState([]);



    const shopInputting = (event) => {
        setUserLocation(event.target.value);
    }


    const handleSubmitting = (event) => {
        event.preventDefault();
        setSearchTerm(userInputting);
        setSearchLocation(userLocation);
        setUserInputting('');
        setUserLocation('');
    }


    useEffect(() => {
        setResultsLimit(20);

        const proxiedUrl = 'https://api.yelp.com/v3/businesses/search';
        const apiKey = process.env.REACT_APP_YELP_API;
        const url = new URL('https://proxy.hackeryou.com');
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
            'params[key]': apiKey,
            'params[term]': 'thrift',
            'params[location]': searchLocation,
            'params[limit]': resultsLimit,
            'proxyHeaders[Authorization]': `Bearer ${apiKey}`,
        });
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.businesses) {
                    setUserShopSearch(data.businesses);
                }
            });
    }, [searchTerm, searchLocation, resultsLimit]);

    console.log(userShopSearch);



    return (
        <div>
            <div>
                <form onSubmit={handleSubmitting}>
                    <label htmlFor="location">Where are you?</label>
                    <input type="text" id="location" value={userLocation} onChange={shopInputting} />
                    <button>Search</button>
                </form>
                <ul className="shopList">
                    {userShopSearch.map((shop) => {
                        return (
                            <li key={shop.id}>
                                <div className="shopContainer" key={shop.id}>
                                    <div className="shopImage">
                                        <img src={shop.image_url} alt={`${shop.name}`} />
                                    </div>
                                    <div className="shopInfo">
                                        <h2>{shop.name}</h2>
                                        <p className="shopType">{shop.categories[0].title}</p>
                                        <p>{shop.location.address1} {shop.location.address2}</p>
                                        <p>{shop.location.city}</p>
                                        <p>{shop.phone}</p>
                                        <p>Rating: {shop.rating}/5</p>
                                        <p className='moreInfo'><a href={shop.url}>More Info</a></p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
};

export default Yelp;