import type { IBaseCountry, IProvince, ICurrency, ICountry, ITribe, IDistrict, Provinces, IReturnedConstituency } from "../_interfaces/interfaces";
import provinces from "./provinces";
import tribes from "./tribes";
// import from '../_utilities/stringUtils';


export class Zambia implements IBaseCountry {

    readonly currency: ICurrency;
    readonly country: ICountry;
    public static areaUnit = 'km2';
    private static provinces: IProvince[] = provinces;
    private static tribes: ITribe[] = tribes;
    static get isLandlocked():boolean { return true}


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
        const cleanName = name.toLowerCase();
        return this.provinces.find((province: IProvince) => province.name === cleanName) ?? null;
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
     * Fetch districts by province
     * @returns IDistrict[]
     */
    public static getDistrictsByProvince(provinceName: string): IDistrict[]{
        const cleanName = provinceName.toLowerCase().toTitleCase();
        const districts: any[] = [];

        provinces.forEach((province) => {
            if(province.name === cleanName){
                
            }
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

    /**
     * Returns all tribe objects in an array.
     * @returns ITribes[]
     */
    public static getTribes (): ITribe[] {
        return this.tribes.filter((tribe: ITribe) => tribe.name !== null);
    }

    /**
     * Returns district objects that belong to the mentioned province
     * @param provinceName (string)
     * @returns IDistrict[]
     */
    public static getDistrictsOfProvince(provinceName: string):IDistrict[]|null {
        const prov: IProvince|undefined = this.provinces.find((province:IProvince) => { province.name.toLowerCase() === provinceName.toLowerCase() });
        return prov?.districts ?? null;
    }

    /**
     * Returns all available constituencies
     * @returns IConstituencies[]
     */
    public static getConstituencies():IReturnedConstituency[]|null {
        const constituenciesArray: IReturnedConstituency[] = [];

        for (let index = 0; index < provinces.length; index++) {
            const province = provinces[index].districts.forEach(district => {
                district.constituencies.forEach(constituency => {
                    const data: IReturnedConstituency = { constituency: constituency.name, district: district.name, province: district.province }

                    constituenciesArray.push(data)
                })
            });
            
        }

        return constituenciesArray;
    }

    /**
     * Returns all constituencies in a province
     * @param provinceName (string)
     * @returns IReturnedConstituency[]
     */
    public static getConstituenciesByProvince(provinceName: string):IReturnedConstituency[]|null {
        const constituenciesArray: IReturnedConstituency[] = [];

        const thisProvince: IProvince|undefined = provinces.find(province => { province.name.toLowerCase() === provinceName.toLowerCase()});
        if(!thisProvince) return null;

        thisProvince.districts.forEach(district => {
            district.constituencies.forEach(constituency => {
                const data: IReturnedConstituency = { constituency: constituency.name, district: district.name, province: district.province }

                constituenciesArray.push(data)
            })
        })

        return constituenciesArray;
    }
}