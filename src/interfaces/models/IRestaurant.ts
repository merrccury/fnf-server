import {IAvailableTime} from "../IAvailableTime";
import {IGeneralEntity} from "./IGeneralEntity";

export interface IRestaurant extends IGeneralEntity{
    uuid: string;
    name: string;
    workingHours: Array<IAvailableTime>;
    photos: Array<string>;
}
