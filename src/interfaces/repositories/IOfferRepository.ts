import {IRepository} from "./IRepository";
import {IOffer} from "../models/IOffer";

export interface IOfferRepository extends IRepository<IOffer> {
     findByRestaurantUuid(restaurantUuid: string): Promise<Array<IOffer>>;
}
