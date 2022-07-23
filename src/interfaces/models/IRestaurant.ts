import {IAvailableTime} from "../IAvailableTime";
import {IGeneralEntity} from "./IGeneralEntity";

export interface IRestaurant extends IGeneralEntity{
    name: string;
    workingHours: Array<IAvailableTime>;
    photos: Array<string>;
}
