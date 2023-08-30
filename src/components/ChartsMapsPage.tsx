import React, { ChangeEvent, useEffect, useState } from "react";

import {
  useCountryData,
  useWorldwideData,
  // API_BASE_URL,
  useCountrySpecificData
 
} from "../api/api";
import Loading from "./Loading";
import { CountryData } from "../lib/types";
import Boxh from "./Boxs";
// import Box from "./Box";
import Map from "./Map";
import { useQuery, useQueryClient } from 'react-query';
// import axios from "axios";
import Table from "./Table";
import Box from "./Box";
// import Boxs from './Boxs';

// const useCountrySpecificData = async (country: string) => {
//   console.log(country);
//   let response;
//   if (country === "worldwide" || country ==="worldWide") {
//     response = await axios.get(`${API_BASE_URL}/all`);
//   } else {
//     response = await axios.get(`${API_BASE_URL}/countries/${country}`);
//   }
//   let countryDetails = response.data;
//   if (!countryDetails) {
//     response = await axios.get(`${API_BASE_URL}/all`);
//     console.log('absent')
//     countryDetails= response.data;
//   }

//   console.log("country", response);
//   return countryDetails;
// };
// const useCountrySpecificData = (country: string) => {
//   const queryKey = ['country', country];

//   const fetchData = async () => {
//     let response;
//     if (country === 'worldwide') {
//       response = await axios.get(`${API_BASE_URL}/all`);
//     } else {
//       response = await axios.get(`${API_BASE_URL}/countries/${country}`);
//     }

//     let countryDetails = response.data;
//     if (!countryDetails) {
//       response = await axios.get(`${API_BASE_URL}/all`);
//       countryDetails = response.data;
//     }
// console.log(countryDetails);
//     return countryDetails;
//   };

//   return useQuery<CountryData>(queryKey, fetchData);
// };

const ChartsMapsPage: React.FC = () => {
  const queryClient = useQueryClient()
 
  const [selectedCountry, setSelectedCountry] = useState('worldWide');
  // const {
  //   data: worldwideData,
  //   error: worldwideError,
  //   isLoading: worldwideLoading,
  // } = useWorldwideData();

  const {
    data: countryData,
    error: countryError,
    isLoading: countryLoading,
  } = useCountryData();

  const { data:countryNameData,refetch , isLoading: countryNameLoading ,error} =
  useCountrySpecificData(selectedCountry);
  // const {
  //   data: countryNameData,
  //   error: countryNameError,
  //   isLoading: countryNameLoading,
  // } = useQuery(["country"], () => useCountrySpecificData(countryDetail));
  // useEffect(() => {
  //   console.log("only to chech the name");
  //   console.log(countryNameData);
  //   setSelectedCountry(countryNameData);
  // }, [countryDetail]);

  if (countryLoading ) {
  // if (worldwideLoading || countryNameLoading || countryLoading) {
    return (
      <div className="flex w-full h-full items-center z-10 justify-center">
        <Loading />
      </div>
    );
  }

  if (countryError|| error) {
    return <div>An error occurred during fetch</div>;
  }
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    console.log(newCountry);
    setSelectedCountry(newCountry);
    // refetch()
    queryClient.invalidateQueries(['country', newCountry])
    // queryClient.setQueryData("country", useCountrySpecificData(e.target.value));
    // queryClient.invalidateQueries(["country", newCountry]);
   
  };
  
 
  return (
    <div className=" relative bg-gray-400 items-start max-h-full flex max-sm:flex-col  justify-between w-full">
      <div className="flex-1 bg-orange-300">
        <div className="md:flex items-start md:justify-between">
          <div className="flex    flex-wrap gap-2 min-w-[10rem] justify-center   ">
            {/* {countryNameData && <Boxh
              cases={countryNameData.cases}
              todayCases={countryNameData.todayCases}
              recovered={countryNameData.recovered}
              deaths={countryNameData.deaths}
              todayRecovered={countryNameData.todayRecovered}
              todayDeaths={countryNameData.todayDeaths}
              loading={countryLoading}         />} */}
             <>
                <Box
                  title="Coronavirus Cases"
                  case={countryNameData?.cases}
                  totalCase={countryNameData?.todayCases}
                />
                <Box
                  title="Recovered"
                  case={countryNameData?.recovered}
                  totalCase={countryNameData?.todayRecovered}
                />
                <Box
                  title="Deaths Cases"
                  case={countryNameData?.deaths}
                  totalCase={countryNameData?.todayDeaths}
                />
              </> 
            
          </div>

          <div className="  min-w-[10rem]    sm:block ">
          <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border w-[100%] border-gray-900"
      >
        <option value="worldWide">WorldWide</option>
        {countryData?.map(({ country }: CountryData) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>
      <div className="min-h-[40vh] ">
        <div className="min-w-[10rem] h-[60vh] sm:block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="font-normal scroll-y text-gray-700 dark:text-gray-400">
            <li className="border w-[100%] border-gray-900">
              <ul className="max-h-48 overflow-y-auto">
                {countryData?.map(({ country, countryInfo }: CountryData) => (
                  <li
                    key={country}
                    className="w-[100%]"
                    value={countryInfo.iso2}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          {/* <Table countryData={countryData} /> */}
        </div>
      </div>
    </div>
  );
};

export default ChartsMapsPage;
