import {IRestaurant} from "../models/IRestaurant";
import {IGeneralEntity} from "../models/IGeneralEntity";
import {IRepository} from "./IRepository";

export interface IRestaurantRepository extends IRepository<IRestaurant> {
}
