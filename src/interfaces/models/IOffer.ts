import {IAvailableTime} from "../IAvailableTime";
import {IGeneralEntity} from "./IGeneralEntity";

export interface IOffer extends IGeneralEntity{
    restaurantUuid: string;
    title: string;
    items: Array<string>;
    schedule: Array<IAvailableTime>;
}
