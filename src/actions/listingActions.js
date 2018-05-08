import axios from 'axios';
import {GOOGLE_PLACES_API_URL, GOOGLE_PLACES_API_KEY} from '../constants/constants';
import NodeGeocoder from 'node-geocoder';
import { locationToLatLong } from '../utilities/locationToLatLong';

var options = {
    provider: 'google',
    httpAdapter: 'https', 
    apiKey: `${GOOGLE_PLACES_API_KEY}`,
    formatter: null     
  };


  export function search(criteria, radius, location) {
    let request;
    var geocoder = NodeGeocoder(options);
    let coords;

   return dispatch => { 
       locationToLatLong(location).then(response =>{
            console.log(response);
             request = axios.get(`${GOOGLE_PLACES_API_URL}location=${response.lat},${response.lng}&radius=${radius}&type=${criteria}&key=${GOOGLE_PLACES_API_KEY}`,
             {headers: {"Access-Control-Allow-Origin": "*"}}).then(response => {
                       console.log(response);
                       console.log(request);
                        dispatch(getListings(response, criteria))
                });
             })
        };
  }

  export const getListings = (listings, criteria) =>{   
      return{
          type: `LIST_${criteria}`,
          payload: listings.data.results
      }
  }
  
  export const listAll = (listings) => {
    return {
      type: 'GET_ALL',
      payload: listings,
    }
  }

