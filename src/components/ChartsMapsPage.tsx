import React, { ChangeEvent, useState } from "react";

import { useCountryData, useCountrySpecificData } from "../api/api";
import Loading from "./Loading";
import { CountryData } from "../lib/types";

import Map from "./Map";
import { useQueryClient } from "react-query";

import Box from "./Box";
import Table from "./Table";
import LineGraph from "./LinearGraph";

const ChartsMapsPage: React.FC = () => {
  const queryClient = useQueryClient();

  const [selectedCountry, setSelectedCountry] = useState("worldWide");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountryName, setmapCountryName] = useState("");
// this is the country data list
  const {
    data: countryData,
    error: countryError,
    isLoading: countryLoading,
  } = useCountryData();
// which get the country data like lat and long of the country being marked
  const { data: countryNameData, error } = useCountrySpecificData({
    country: selectedCountry,
    setMapCenter,
    setMapZoom,
    setmapCountryName,
  });
// initial load page
  if (countryLoading) {
    return (
      <div className="flex w-full min-h-screen  items-center z-10 justify-center">
        <Loading />
      </div>
    );
  }
// error handle
  if (countryError || error) {
    return <div>An error occurred during fetch</div>;
  }
  // this is the function which handle the country being selected form the drop down country name list
  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    console.log(newCountry);
    setSelectedCountry(newCountry);
// handle the fetch the particular country data and change the ui particular to that content
    queryClient.invalidateQueries(["country", newCountry]);
  };

  return (
    <div className="relative  max-xl:flex-col overflow-y-hidden  gap-1  min-screen-h flex   justify-between md:flex  ">
      <div className="  justify-center w-[100%] flex flex-col  min-h-full">
        <div className="max-sm:s h-[30%] relative gap-3 md:flex w-[100%] flex-wrap px-2 max-sm:flex-wrap md:h-[10rem] md:justify-around md:items-center max-md:py-4">
          <div className="top-1 flex-wrap    md:flex  py-3 gap-2  md:p-2 md:items-center ">
           {/* box component to list the content of the covid cases */}
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
{/* search bar list of country name  */}
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
        {/* map components */}
        <div className="relative mb-3">
          {countryData && (
            <Map
              center={mapCenter}
              zoom={mapZoom}
              mapCountryName={mapCountryName}
              data={countryData}
            />
          )}
        </div>
      </div>
{/* list of country with live covid cases */}
      <div className="relative min-w-[6rem] max-md:min-w-[100%] h-auto max-sm:text-sm sm:block max-sm:flex-col max-w-sm p-6 bg-gray-200 border flex justify-between items-center border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-sm font-bold tracking-tight md:text-xl text-gray-900 dark:text-white">
          live country and covid cases
        </h5>
        <div>{countryData && <Table countryData={countryData} />}</div>

          <h5 className="mb-2 text-sm font-bold tracking-tight md:text-xl text-gray-900 dark:text-white">
            world wide new cases{" "}
          </h5>
        <div>
          {/* chart which show line graph of the covid case with date  */}
          <div className="relative bg-white">
            <LineGraph casesType={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsMapsPage;
