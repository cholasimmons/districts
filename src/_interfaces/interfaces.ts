import { Zambia } from "../Zambia/zm";
export { IProvince, IDistrict, IConstituency, IBaseCountry, ICurrency, ICountry, ITribe, Provinces, IReturnedConstituency };

interface IProvince {
    name: string; capital: string; area?: number; country: string; nickname?: string; count?: number, phoneAreaCode?: number, districts: IDistrict[]
}
interface IDistrict {
    name: string; headquarters: string; area?: number; province: string; nickname?: string; constituencies: IConstituency[]
}
interface IConstituency {
    name: string;
}

interface IBaseCountry {
    currency: ICurrency;
    country: ICountry;
}

interface ICurrency {
    name: string;
    code: string; // ISO 4217 currency code e.g: "ZMW"
    symbol: string; // e.g: "K"
};
interface ICountry {
    name: string;
    code: string; // ISO 3166-1 Alpha-2 country code
    phoneCode: number; //International telephone dialing code
}
interface ITribe {
    name: string;
    origin?: string[]
}
enum Provinces {
    getProvinceNames
}
interface IReturnedConstituency {
    constituency: string;
    district: string;
    province: string;
}