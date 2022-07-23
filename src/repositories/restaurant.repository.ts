import {IGeneralEntity, IRestaurant, IRestaurantRepository} from "../interfaces";
import {Inject, Injectable} from "@nestjs/common";
import {Collection} from "mongodb";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
    constructor(@Inject('RESTAURANT_COLLECTION')private readonly collection: Collection<IRestaurant>) {
    }

    async addItem(item: Omit<IRestaurant, keyof IGeneralEntity>): Promise<IRestaurant> {
        const newItem: IRestaurant = {
            ...item,
            createdAt: new Date(),
            deleted: false,
            uuid: uuidv4(),
        }
        await this.collection.insertOne(newItem);
        return newItem
    }

    getItem(uuid: string): Promise<IRestaurant | null> {
        return this.collection.findOne({uuid});
    }

    getItems(): Promise<IRestaurant[]> {
        return this.collection.find({deleted: false}).limit(20).toArray();
    }
}
