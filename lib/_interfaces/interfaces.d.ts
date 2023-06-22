export { IProvince, IDistrict, IConstituency, IBaseCountry, ICurrency, ICountry, ITribe, Provinces, IReturnedConstituency };
interface IProvince {
    name: string;
    capital: string;
    area?: number;
    country: string;
    nickname?: string;
    count?: number;
    phoneAreaCode?: number;
    districts: IDistrict[];
}
interface IDistrict {
    name: string;
    headquarters: string;
    area?: number;
    province: string;
    nickname?: string;
    constituencies: IConstituency[];
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
    code: string;
    symbol: string;
}
interface ICountry {
    name: string;
    code: string;
    phoneCode: number;
}
interface ITribe {
    name: string;
    origin?: string[];
}
declare enum Provinces {
    getProvinceNames = 0
}
interface IReturnedConstituency {
    constituency: string;
    district: string;
    province: string;
}
