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
        request = axios.get(`${GOOGLE_PLACES_API_URL}/
                    location=${lattitude},${longitude}
                    &radius=${radius}&type=${criteria}
                    &key=${GOOGLE_PLACES_API_KEY}`,{
                    headers: {"Access-Control-Allow-Origin": "*"}})
            .then(response => {
                dispatch(getListings(response, criteria))
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

