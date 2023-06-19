export { IProvince, IDistrict, IConstituency, IBaseCountry, ICurrency, ICountry, ITribes };
interface IProvince {
    name: string;
    capital: string;
    area?: number;
    country: string;
    nickname?: string;
    count?: number;
    phoneAreaCode?: string;
    districts: IDistrict[];
}
interface IDistrict {
    name: string;
    capital: string;
    area?: number;
    province: string;
    nickname?: string;
    constituencies: IConstituency[];
}
interface IConstituency {
    name?: string;
}
interface IBaseCountry {
    currency: ICurrency;
    country: ICountry;
    tribes: ITribes[];
}
interface ICurrency {
    name: string;
    code: string;
    symbol: string;
    iso?: number;
}
interface ICountry {
    name: string;
    code: string;
    phoneCode: number;
}
interface ITribes {
    name: string;
}
