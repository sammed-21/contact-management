import React from 'react'
import { CountryData } from '../lib/types'

const Table:React.FC<CountryData> = ({countryData}) => {
  return (
      <div>
           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <ul className="font-normal scroll-y text-gray-700 dark:text-gray-400">
            <li className="border w-[100%] border-gray-900">
              <ul className="max-h-48 overflow-y-auto">
                {countryData.map(({ country, countryInfo }: CountryData) => (
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
    </div>
  )
}

export default Table