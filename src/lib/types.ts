  export interface CountryInfo {
      _id: number;
      iso2: string;
      iso3: string;
      lat: number;
      long: number;
      flag: string;
    }
    
  export interface CountryData {
      updated: number;
      country: string;
      countryInfo: CountryInfo;
      cases: number;
      todayCases: number;
      deaths: number;
      todayDeaths: number;
      recovered: number;
      todayRecovered: number;
      active: number;
      critical: number;
      casesPerOneMillion: number;
      deathsPerOneMillion: number;
      tests: number;
      testsPerOneMillion: number;
      population: number;
      continent: string;
      oneCasePerPeople: number;
      oneDeathPerPeople: number;
      oneTestPerPeople: number;
      activePerOneMillion: number;
      recoveredPerOneMillion: number;
      criticalPerOneMillion: number;
    }
    
    export interface CountryCovidData {
      updated: number;
      cases: number;
      todayCases: number;
      deaths: number;
      todayDeaths: number;
      recovered: number;
      todayRecovered: number;
      active: number;
      critical: number;
      casesPerOneMillion: number;
      deathsPerOneMillion: number;
      tests: number;
      testsPerOneMillion: number;
      population: number;
      oneCasePerPeople: number;
      oneDeathPerPeople: number;
      oneTestPerPeople: number;
      activePerOneMillion: number;
      recoveredPerOneMillion: number;
      criticalPerOneMillion: number;
      affectedCountries: number;
    }
    
    // types.ts
   export interface Contact {
      id: number;
      name: string;
      email: string;
      phoneNumber: string;
      status: string;
    }
    
   export interface ContactState {
      contacts: Contact[];
    }
    
   export const initialState: ContactState = {
      contacts: [],
    };