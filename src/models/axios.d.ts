import {AxiosRequestConfig} from "axios";
import * as axios from 'axios'

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> {}
}
// 解决TS爆红问题
declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>;
    }
}