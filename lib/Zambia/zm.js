import provinces from "./provinces";
import tribes from "./tribes";
// import from '../_utilities/stringUtils';
class Zambia {
    static get isLandlocked() { return true; }
    constructor() {
        this.country = { name: 'Zambia', code: 'ZM', phoneCode: 260 };
        this.currency = { name: 'Kwacha', code: 'ZMW', symbol: 'K' };
    }
    /**
     * Get all province objects of the country as a full nested array
     * @returnsI IProvince[]
     **/
    static getProvinces() {
        return this.provinces.filter((province) => province.name !== null);
    }
    /**
     * Get single province object by name provided
     * @requires string
     * @returns IProvince
     **/
    static getProvince(name) {
        var _a;
        return (_a = this.provinces.find((province) => province.name.toLowerCase() === name.toLowerCase())) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Get a list (array) of ONLY province names, in no particular order
     * @returns string[]
     */
    static getProvinceNames() {
        return this.provinces.map((province) => province.name);
    }
    /**
     * Fetch all districts from every province
     * @returns IDistrict[]
     */
    static getDistricts() {
        const districts = [];
        provinces.forEach((province) => {
            province.districts.forEach((district) => {
                districts.push(district);
            });
        });
        return districts;
    }
    /**
     * Fetch districts by province
     * @returns IDistrict[]
     */
    static getDistrictsByProvince(provinceName) {
        const districts = [];
        provinces.forEach((province) => {
            if (province.name.toLowerCase() === provinceName.toLowerCase()) {
            }
            province.districts.forEach((district) => {
                districts.push(district);
            });
        });
        return districts;
    }
    /**
     * Count all districts in every province (could just use length from getAllDistricts() function)
     * @returns number
     */
    static countAllDistricts() {
        let count = 0;
        this.provinces.forEach(province => {
            count += province.districts.length;
        });
        return count;
    }
    /**
     * Get single district object by name provided
     * @requires string
     * @returns IDistrict
     **/
    static getDistrict(name) {
        const matchingDistricts = [];
        this.provinces.forEach((province) => {
            province.districts.forEach((district) => {
                if (district.name.toLowerCase().includes(name.toLowerCase()))
                    matchingDistricts.push(district);
            });
        });
        return matchingDistricts;
    }
    /**
     * Returns all tribe objects in an array.
     * @returns ITribes[]
     */
    static getTribes() {
        return this.tribes.filter((tribe) => tribe.name !== null);
    }
    /**
     * Returns district objects that belong to the mentioned province
     * @param provinceName (string)
     * @returns IDistrict[]
     */
    static getDistrictsOfProvince(provinceName) {
        var _a;
        const prov = this.provinces.find((province) => { province.name.toLowerCase() === provinceName.toLowerCase(); });
        return (_a = prov === null || prov === void 0 ? void 0 : prov.districts) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Returns all available constituencies
     * @returns IConstituencies[]
     */
    static getConstituencies() {
        const constituenciesArray = [];
        for (let index = 0; index < provinces.length; index++) {
            const province = provinces[index].districts.forEach(district => {
                district.constituencies.forEach(constituency => {
                    const data = { constituency: constituency.name, district: district.name, province: district.province };
                    constituenciesArray.push(data);
                });
            });
        }
        return constituenciesArray;
    }
    /**
     * Returns all constituencies in a province
     * @param provinceName (string)
     * @returns IReturnedConstituency[]
     */
    static getConstituenciesByProvince(provinceName) {
        const constituenciesArray = [];
        const thisProvince = provinces.find(province => { province.name.toLowerCase() === provinceName.toLowerCase(); });
        if (!thisProvince)
            return null;
        thisProvince.districts.forEach(district => {
            district.constituencies.forEach(constituency => {
                const data = { constituency: constituency.name, district: district.name, province: district.province };
                constituenciesArray.push(data);
            });
        });
        return constituenciesArray;
    }
}
Zambia.areaUnit = 'km2';
Zambia.provinces = provinces;
Zambia.tribes = tribes;
export { Zambia };
