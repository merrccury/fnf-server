import {IGeneralEntity} from "./IGeneralEntity";

export interface IQrCode extends IGeneralEntity{
    restaurantUuid: string;
    table: number
}
