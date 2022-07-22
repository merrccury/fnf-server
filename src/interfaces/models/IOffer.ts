import {IAvailableTime} from "../IAvailableTime";

export interface IOffer{
    uuid: string;
    restaurantUuid: string;
    title: string;
    items: Array<string>;
    schedule: Array<IAvailableTime>;
    deleted: boolean;
    createdAt: Date;
}
