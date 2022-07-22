import {IAvailableTime} from "../IAvailableTime";

export interface IRestaurant {
    uuid: string;
    name: string;
    workingHours: Array<IAvailableTime>;
    photos: Array<string>;
    deleted: boolean;
    createdAt: Date;
}
