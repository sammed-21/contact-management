
export const API_BASE_URL = 'https://disease.sh/v3/covid-19';



// src/api/api.ts
import { useQuery } from 'react-query';
import axios from 'axios';
import { CountryData } from '../lib/types';
interface UseCountrySpecificDataArgs {
  country: string;
  setMapCenter: React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>
  setMapZoom: React.Dispatch<React.SetStateAction<number>>
  setmapCountryName: React.Dispatch<React.SetStateAction<string>>
}
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
export const fetchCountryData = async (country: string) => {
  const response = await axios.get(
    country === 'worldWide'
      ? `${API_BASE_URL}/all`
      : `${API_BASE_URL}/countries/${country}`
  );
  return response.data;
};
export const useCountrySpecificData = ({
  country,
  setMapCenter,
  setMapZoom,
  setmapCountryName
}: UseCountrySpecificDataArgs) => {
  const queryKey = ['country', country];
  return useQuery<CountryData>(queryKey, async () => {
    const data = await fetchCountryData(country);
    if (country !== 'worldWide') {
      
      setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
      setMapZoom(4);
      console.log(country)
      setmapCountryName(country)
    }
    return data;
  });
};
 

export const useGraphData = () => {
  return useQuery('graph', async () => {
    const response = await axios.get(`${API_BASE_URL}/historical/all?lastdays=all`);
    return response.data;
  });
};