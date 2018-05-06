import axios from 'axios';
import React from 'react';

import { GOOGLE_PLACES_API_KEY, GOOGLE_GEOCODE_API_URL} from '../constants/constants';
const options = {
    provider: 'google',
    httpAdapter: 'https', 
    apiKey: `${GOOGLE_PLACES_API_KEY}`,
    formatter: null     
  };

export const locationToLatLong = location => {  
     return axios.get(`${GOOGLE_GEOCODE_API_URL}address=${location}&key=${GOOGLE_PLACES_API_KEY}`)
            .then(function(response){
                    let list = {};
                    list = response.data.results[0].geometry.location
                    console.log(list);
                    return list;           
        });
}




