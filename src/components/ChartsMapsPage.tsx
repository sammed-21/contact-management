import React, { ChangeEvent, useState } from "react";

import {
  useCountryData,
 
  useCountrySpecificData,
} from "../api/api";
import Loading from "./Loading";
import { CountryData } from "../lib/types";
 
import Map from "./Map";
import { useQueryClient } from "react-query";
 
import Box from "./Box";
import Table from "./Table";
import LinearGraph from "./LinearGraph";
 
const ChartsMapsPage: React.FC = () => {
  const queryClient = useQueryClient();

  const [selectedCountry, setSelectedCountry] = useState("worldWide");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountryName, setmapCountryName] = useState("");

  const {
    data: countryData,
    error: countryError,
    isLoading: countryLoading,
  } = useCountryData();

  const { data: countryNameData, error } = useCountrySpecificData({
    country: selectedCountry,
    setMapCenter,
    setMapZoom,
    setmapCountryName,
  });

  if (countryLoading) {
    return (
      <div className="flex w-full h-full items-center z-10 justify-center">
        <Loading />
      </div>
    );
  }

  if (countryError || error) {
    return <div>An error occurred during fetch</div>;
  }
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    console.log(newCountry);
    setSelectedCountry(newCountry);

    queryClient.invalidateQueries(["country", newCountry]);
  };

  return (
    <div className="relative  max-md:flex-col    bg-gray-400 gap-1  min-h-[95vh] flex   justify-between md:flex  ">
      <div className="  justify-between w-[100%] flex flex-col  min-h-full">
        <div className=" h-[30%] relative gap-3 md:flex w-[100%] flex-wrap px-2 max-sm:flex-wrap md:h-[10rem] md:justify-between md:items-center">
          <div className="top-1 flex-wrap    md:flex   gap-2  md:p-2 md:items-center ">
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
          </div>

          <div className="  min-w-[6rem]   sm:block ">
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="border items-center px-5 py-2 rounded-xl  w-[100%] border-gray-900"
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
        <div className="relative m-3">
          {countryData && 
          <Map
          center={mapCenter}
          zoom={mapZoom}
          mapCountryName={mapCountryName}
          data={countryData}
          />
        }
        </div>
      </div>

      <div className=" max-w-[100%] ">
        <div className="min-w-[6rem] max-md:min-w-[100%] h-[60vh] max-sm:text-sm sm:block max-w-sm p-6 bg-gray-200 border justify-between items-center border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
         
            
          <h5 className="mb-2 text-sm font-bold tracking-tight md:text-xl text-gray-900 dark:text-white">
            live country and covid cases
          </h5>
          <div>{countryData && <Table countryData={countryData} />}</div>
   
          <div>
            <h5 className="mb-2 text-sm font-bold tracking-tight md:text-xl text-gray-900 dark:text-white">
              world wide new cases{" "}
            </h5>
            <div className="max-w-[15rem] bg-slate-500">
              {/* <LinearGraph /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsMapsPage;
