import type { IBaseCountry, IProvince, ICurrency, ICountry, ITribe, IDistrict } from "../interfaces/interfaces";
import provinces from "./provinces";
import tribes from "./tribes";


export class Zambia implements IBaseCountry {

    readonly currency: ICurrency;
    readonly country: ICountry;
    public static areaUnit = 'km2';
    private static provinces: IProvince[] = provinces;
    private static tribes: ITribe[] = tribes;


    constructor(){
        this.country = { name: 'Zambia', code: 'ZM', phoneCode: 260 };
        this.currency = { name: 'Kwacha', code: 'ZMW', symbol: 'K' };
    }
 

    /** 
     * Get all province objects of the country as a full nested array
     * @returnsI IProvince[]
     **/
    public static getProvinces(): IProvince[]{
        return this.provinces.filter((province: IProvince) => province.name !== null);
    }


    /** 
     * Get single province object by name provided
     * @requires string
     * @returns IProvince
     **/
    public static getProvince(name: string): IProvince|null{
        return this.provinces.find((province: IProvince) => province.name === name) ?? null;
    }

    /**
     * Get a list (array) of ONLY province names, in no particular order
     * @returns string[]
     */
    public static getProvinceNames(): string[]{
        return this.provinces.map((province) => province.name)
    }

    /**
     * Fetch all districts from every province
     * @returns IDistrict[]
     */
    public static getDistricts(): IDistrict[]{
        const districts: any[] = [];

        provinces.forEach((province) => {
            province.districts.forEach((district) => {
                districts.push(district);
            })
        })
        return districts;
    }
    
    /**
     * Count all districts in every province (could just use length from getAllDistricts() function)
     * @returns number
     */
    public static countAllDistricts(): number{
        let count = 0;

        this.provinces.forEach(province => {
            count += province.districts.length;
        })
        return count;
    }

    /** 
     * Get single district object by name provided
     * @requires string
     * @returns IDistrict
     **/
    public static getDistrict(name: string): IDistrict[]|null{
        const matchingDistricts: IDistrict[] = [];

        this.provinces.forEach((province: IProvince) => {
            province.districts.forEach((district)=> {
                if(district.name.toLowerCase().includes(name.toLowerCase()))
                    matchingDistricts.push(district)
            });
        });

        return matchingDistricts;
    }

    public static getTribes (): ITribe[] {
        return this.tribes.filter((tribe: ITribe) => tribe.name !== null);
    }


    public static countDistrictsOfProvince(provinceName: string):number {
        const prov: IProvince[] = this.provinces.filter((province:IProvince) => {province.name === provinceName });
        return prov[0].districts.length ;
    }

    static get isLandlocked():boolean { return true}

}