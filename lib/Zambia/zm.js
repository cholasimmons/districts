"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zambia = void 0;
const provinces_1 = __importDefault(require("./provinces"));
class Zambia {
    constructor() {
        this.country = { name: 'Zambia', code: 'ZM', phoneCode: 260 };
        this.currency = { name: 'Kwacha', code: 'ZMW', symbol: 'K' };
        this.tribes = [
            { name: 'Bemba' }, { name: 'Nyanja' }
        ];
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
     * @returns IProvince[]
     **/
    static getProvince(name) {
        var _a;
        return (_a = this.provinces.find((province) => province.name === name)) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Get a list of ONLY province names, in no particular order
     * @returns string[]
     */
    static getProvinceNames() {
        return this.provinces.map((province) => province.name);
    }
    /**
     * Fetch all districts from every province
     * @returns IDistrict[]
     */
    static getAllDistricts() {
        const districts = [];
        provinces_1.default.forEach((province) => {
            province.districts.forEach((district) => {
                districts.push(district);
            });
        });
        return districts;
    }
    /**
     * Count all districts in every province
     * @returns number
     */
    static countAllDistricts() {
        let count = 0;
        this.provinces.forEach(province => {
            count += province.districts.length;
        });
        return count;
    }
    getTribes() {
        return this.tribes.filter((tribe) => tribe.name !== null);
    }
    static countDistrictsOfProvince(provinceName) {
        const prov = this.provinces.filter((province) => { province.name === provinceName; });
        return prov[0].districts.length;
    }
}
Zambia.areaUnit = 'km2';
Zambia.provinces = provinces_1.default;
exports.Zambia = Zambia;
