import type { IBaseCountry, IProvince, ICurrency, ICountry, ITribe, IDistrict, IReturnedConstituency } from "../_interfaces/interfaces";
export declare class Zambia implements IBaseCountry {
    readonly currency: ICurrency;
    readonly country: ICountry;
    static areaUnit: string;
    private static provinces;
    private static tribes;
    static get isLandlocked(): boolean;
    constructor();
    /**
     * Get all province objects of the country as a full nested array
     * @returnsI IProvince[]
     **/
    static getProvinces(): IProvince[];
    /**
     * Get single province object by name provided
     * @requires string
     * @returns IProvince
     **/
    static getProvince(name: string): IProvince | null;
    /**
     * Get a list (array) of ONLY province names, in no particular order
     * @returns string[]
     */
    static getProvinceNames(): string[];
    /**
     * Fetch all districts from every province
     * @returns IDistrict[]
     */
    static getDistricts(): IDistrict[];
    /**
     * Fetch districts by province
     * @returns IDistrict[]
     */
    static getDistrictsByProvince(provinceName: string): IDistrict[];
    /**
     * Count all districts in every province (could just use length from getAllDistricts() function)
     * @returns number
     */
    static countAllDistricts(): number;
    /**
     * Get single district object by name provided
     * @requires string
     * @returns IDistrict
     **/
    static getDistrict(name: string): IDistrict[] | null;
    /**
     * Returns all tribe objects in an array.
     * @returns ITribes[]
     */
    static getTribes(): ITribe[];
    /**
     * Returns district objects that belong to the mentioned province
     * @param provinceName (string)
     * @returns IDistrict[]
     */
    static getDistrictsOfProvince(provinceName: string): IDistrict[] | null;
    /**
     * Returns all available constituencies
     * @returns IConstituencies[]
     */
    static getConstituencies(): IReturnedConstituency[] | null;
    /**
     * Returns all constituencies in a province
     * @param provinceName (string)
     * @returns IReturnedConstituency[]
     */
    static getConstituenciesByProvince(provinceName: string): IReturnedConstituency[] | null;
}
