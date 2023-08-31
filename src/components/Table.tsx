import React from "react";
import { CountryData } from "../lib/types";
interface TableProps {
  countryData: CountryData[];
}
const Table: React.FC<TableProps> = ({ countryData }) => {
  const sortedCountryData = countryData.slice().sort((a, b) => b.cases - a.cases);
  return (
    <div>
    
      <ul className=" max-md:w-[100%] max-h-[20rem] overflow-y-auto dark:text-whit  font-normal scroll-y text-gray-700  ">
        {/* <li className="  border w-[100%] border-gray-900"> */}
        <table className="font-normal scroll-y text-gray-700 dark:text-gray-400">
        <tbody>
          {sortedCountryData.map(({ country, cases }: CountryData) => (
            <tr className="flex justify-between" key={country}>
              <td>{country}</td>
              <td>{cases}</td>
            </tr>
          ))}
        </tbody>
      </table>
           
      </ul>
    </div>
  );
};

export default Table;
