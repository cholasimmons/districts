declare const _default: {
    name: string;
    capital: string;
    area: number;
    country: string;
    phoneAreaCode: number;
    districts: ({
        name: string;
        headquarters: string;
        area: undefined;
        province: string;
        nickname: undefined;
        constituencies: {
            name: string;
        }[];
    } | {
        name: string;
        headquarters: string;
        area: number;
        province: string;
        nickname: undefined;
        constituencies: {
            name: string;
        }[];
    } | {
        name: string;
        headquarters: string;
        area: number;
        province: string;
        nickname: string;
        constituencies: {
            name: string;
        }[];
    })[];
}[];
export default _default;
