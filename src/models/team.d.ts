import {userType} from "./user";
/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    userId:string;
    username:string;
    name: string;
    description: string;
    expireTime?: Date;
    maxNum: number;
    password?: string,
    // todo 定义枚举值类型，更规范
    status: number;
    createTime: Date;
    updateTime: Date;
    createUser?: userType;
    hasJoinNum?: number;
    hasJoin?: number;
};