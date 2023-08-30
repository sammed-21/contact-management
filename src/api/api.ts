// // src/api/api.ts
// import { useMutation, useQuery } from 'react-query';
// import axios from 'axios';

export const API_BASE_URL = 'https://disease.sh/v3/covid-19';

// export const useWorldwideData = () => {
//   return useQuery('worldwide', async () => {
//     const response = await axios.get(`${API_BASE_URL}/all`);
//     return response.data;
//   });
// };

// export const useCountryData = () => {
//     return useQuery('countries', async () => {
       
//     const response = await axios.get(`${API_BASE_URL}/countries/`);
//     return response.data;
//   });
// };

// export const useCountrySpecificData =   (country:string) => {
//     return useQuery('countries', async () => {
       
//         const response = await axios.get(`${API_BASE_URL}/countries/${country}`);
//         console.log(response.data)
//         return response.data;
//       });
 
// };


// src/api/api.ts
import { useQuery } from 'react-query';
import axios from 'axios';
import { CountryData } from '../lib/types';

export const useWorldwideData = () => {
  return useQuery('worldwide', async () => {
    const response = await axios.get(`${API_BASE_URL}/all`);
    return response.data;
  });
};

export const useCountryData = () => {
  return useQuery<CountryData[]>('countries', async () => {
    const response = await axios.get(`${API_BASE_URL}/countries`);
    return response.data;
  });
};

export const useCountrySpecificData = (country: string) => {
  const queryKey = ['country', country];
  return useQuery<CountryData>(queryKey, async () => {
    const response = await axios.get(
      country === 'worldWide'
      ? `${API_BASE_URL}/all`
      : `${API_BASE_URL}/countries/${country}`
      );
    return response.data;
  });
};

// Other functions...

export const useGraphData = () => {
  return useQuery('graph', async () => {
    const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`);
    return response.data;
  });
};