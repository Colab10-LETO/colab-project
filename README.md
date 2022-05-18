
# Thrift Finder

The state of thrift shopping and clothing donations is very unorganized, and it can be overwhelming to the unseasoned shopper. A platform to make sustainable clothing shopping more accessible by allowing older, less tech savvy users easily find centers to donate, buy, or recycle second-hand textiles. 

## Acknowledgements

[More Info](https://www.joincolab.io/projects/thrift-finder)

[Product Pitch Video](https://www.youtube.com/watch?v=Kku6j5WriHE)

[View Product Spec Document](https://docs.google.com/document/d/1u4qCYVvYhFgNcKojlelL_qh9j8xH2LC0OGhqGWwX7Wg/edit)
## API Reference

#### Get all Businesses

```http
  GET https://api.yelp.com/v3/businesses/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| "proxyHeaders[Authorization]` | `Bearer ${apiKey}` | **Required**. Your API key |
| "params[term]" | "thrift" |
| "params[location]" | searchLocation | 



API call adapted from https://github.com/BingeFest/bingeFest a group project Lorraine Leslie worked on at Juno College. (YELP API call component built by [Jimmy Ellercamp](https://github.com/JimmyEllercamp) )
## Authors

Developers:

- [@lomarieleslie](https://github.com/lomarieleslie)
- [@EmilyDSarani](https://github.com/EmilyDSarani)

Designer : [Oscar Coello](https://www.oscarjosecoello.com/)

Product Manager : [Tochukwu Idinmachi](https://www.linkedin.com/in/tochukwu-idinmachi-mba-pmp%C2%AE-476b2115/)



## Tech Stack

**Client:** React.js, JSX, CSS



## Support

For support, email hello.thriftfinder@gmail.com


