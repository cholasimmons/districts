declare const _default: ({
    name: string;
    capital: string;
    area: number;
    country: string;
    districts: {
        name: string;
        capital: string;
        area: number;
        province: string;
        nickname: string;
        constituencies: {
            name: string;
        }[];
    }[];
    phoneAreaCode?: undefined;
} | {
    name: string;
    capital: string;
    area: number;
    country: string;
    phoneAreaCode: string;
    districts: ({
        name: string;
        capital: string;
        area: number;
        province: string;
        nickname: undefined;
        constituencies: {
            name: string;
        }[];
    } | {
        name: string;
        capital: string;
        area: number;
        province: string;
        nickname: string;
        constituencies: {
            name: string;
        }[];
    })[];
})[];
export = _default;
