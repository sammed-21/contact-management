// import React from 'react'
// import { CountryData } from "../lib/types"
// import Box from './Box'
// interface BoxhProps extends CountryData {
//     loading: boolean;
//   }
  

// // export default CountryCombinedData;
//   const Boxh:React.FC<BoxhProps>= ({
//     cases,
//     todayCases,
//     recovered,
//     deaths,
//     todayRecovered,
//     todayDeaths,
//     loading
//   }) => {
//     return (
//         <div>
             
//             <>
              {/* <Box
                title="Coronavirus Cases"
                case={CountryData.cases}
                totalCase={countryDetail.todayCases}
                />
              <Box
                title="Recovered"
                case={countryDetail.recovered}
                totalCase={countryDetail.todayRecovered}
                />
              <Box
                title="Deaths Cases"
                case={countryDetail.deaths}
                totalCase={countryDetail.todayDeaths}
                /> */}
//               <Box
//                 title="Coronavirus Cases"
//                 case={cases}
//                     totalCase={todayCases}
//                     loading={loading}
//                 />
//               <Box
//                 title="Recovered"
//                 case={recovered}
//                     totalCase={todayRecovered}
//                     loading={loading}
//                 />
//               <Box
//                 title="Deaths Cases"
//                 case={deaths}
//                     totalCase={todayDeaths}
//                     loading={loading}
//                 />
//             </>
         
//           </div>
//   )
// }
// export default Boxh
 
import React from 'react';
import { CountryData } from '../lib/types';
import Box from './Box';

interface BoxhProps extends CountryData {
    loading: boolean;
  }

const Boxh: React.FC<BoxhProps> = ({
    cases,
    todayCases,
    recovered,
    deaths,
    todayRecovered,
    todayDeaths,
    loading
  
}) => {
  return (
    <div>
          <Box title="Coronavirus Cases" case={cases} totalCase={todayCases} loading={loading} />
      <Box title="Recovered" case={recovered} totalCase={todayRecovered} loading={loading} />
      <Box title="Deaths Cases" case={deaths} totalCase={todayDeaths} loading={loading} />
    </div>
  );
};

export default Boxh;