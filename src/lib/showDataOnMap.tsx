import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import { CountryData } from './types';

interface CasesTypeColors {
    cases: {
        hex: string;
        multiplier: number;
    };
    recovered: {
        hex: string;
        multiplier: number;
    };
    deaths: {
        hex: string;
        multiplier: number;
    };
}

const casesTypeColors: CasesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 200,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    },
};

interface ShowDataOnMapProps {
    data: CountryData[];
    casesType?: keyof CasesTypeColors;
}

const ShowDataOnMap: React.FC<ShowDataOnMapProps> = ({ data, casesType = "cases" }) => (
    <>
        {data.map((country: CountryData) => (
            <Circle
                key={country.country}
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                fillOpacity={0.1}
                radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
            >
                <Popup>
                    <div className="bg-green-300 flex flex-col gap-4">
                        <div
                            className=""
                            style={{  backgroundImage:`url(${country.countryInfo.flag})` }}
                        ></div>
                        <div className="font-bold">{country.country}</div>
                        <div className="">
                            Cases: {numeral(country.cases).format("0,0")}
                        </div>
                        <div className="">
                            Recovered: {numeral(country.recovered).format("0,0")}
                        </div>
                        <div className="">
                            acitve: {numeral(country.active).format("0,0")}
                        </div>
                        <div className="">
                            Deaths: {numeral(country.deaths).format("0,0")}
                        </div>
                    </div>
                </Popup>
            </Circle>
        ))}
    </>
);

export default ShowDataOnMap;
