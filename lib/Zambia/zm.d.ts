import type { IBaseCountry, IProvince, ICurrency, ICountry, ITribes, IDistrict } from "../interfaces/interfaces";
export declare class Zambia implements IBaseCountry {
    readonly currency: ICurrency;
    readonly country: ICountry;
    readonly tribes: ITribes[];
    static areaUnit: string;
    constructor();
    /**
     * Get all province objects of the country as a full nested array
     * @returnsI IProvince[]
     **/
    static getProvinces(): IProvince[];
    /**
     * Get single province object by name provided
     * @requires string
     * @returns IProvince[]
     **/
    static getProvince(name: string): IProvince | null;
    /**
     * Get a list of ONLY province names, in no particular order
     * @returns string[]
     */
    static getProvinceNames(): string[];
    /**
     * Fetch all districts from every province
     * @returns IDistrict[]
     */
    static getAllDistricts(): IDistrict[];
    /**
     * Count all districts in every province
     * @returns number
     */
    static countAllDistricts(): number;
    getTribes(): ITribes[];
    private static provinces;
    static countDistrictsOfProvince(provinceName: string): number;
}
