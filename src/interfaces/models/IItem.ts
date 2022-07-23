import {IGeneralEntity} from "./IGeneralEntity";

export interface IItem extends IGeneralEntity{
    restaurantUuid: string;
    title: string;
    description: string;
    photos: Array<string>;
    isAvailable: boolean;
    compound: string[];
    price: number;
}
