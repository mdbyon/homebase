import axios from 'axios';
import {GOOGLE_PLACES_API_URL, GOOGLE_PLACES_API_KEY} from '../constants/constants';
import NodeGeocoder from 'node-geocoder';

var options = {
    provider: 'google',
    httpAdapter: 'https', 
    apiKey: `${GOOGLE_PLACES_API_KEY}`,
    formatter: null     
  };


  export function search(criteria, radius, location) {
    let request;
    var geocoder = NodeGeocoder(options);
    let lattitude;
    let longitude;

    geocoder.geocode(location)
    .then(function(res) {
      lattitude = res.lattitude;
      longitude = res.longitude;

    })
    .catch(function(err) {
      console.log(err);
    });

    return dispatch => {
        request = axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.3600825,-71.0588801&radius=1500&type=hospital&key=AIzaSyCwiPY7J56ERTLPmbdOcT4yGOi-zK9Puy4',{
                    headers: {"Access-Control-Allow-Origin": "*"}})
            .then(response => {
                console.log(response);
                dispatch(getListings(response.data, 'HOSPITALS'))
        });
    }
  }

  export const getListings = (listings, criteria) =>{   
      return{
          type: `LIST_${criteria}`,
          payload: listings.results
      }
  }
  
  export const listAll = (listings) => {
    return {
      type: 'GET_ALL',
      payload: listings,
    }
  }

