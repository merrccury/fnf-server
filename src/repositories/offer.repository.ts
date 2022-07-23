import {IGeneralEntity, IOffer, IOfferRepository, IRestaurant} from "../interfaces";
import {Inject, Injectable} from "@nestjs/common";
import {Collection} from "mongodb";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class OfferRepository implements IOfferRepository {

    constructor(@Inject('OFFER_COLLECTION') private readonly collection: Collection<IOffer>) {
    }

    async addItem(item: Omit<IOffer, keyof IGeneralEntity>): Promise<IOffer> {
        const newItem: IOffer = {
            ...item,
            createdAt: new Date(),
            deleted: false,
            uuid: uuidv4(),
        }
        await this.collection.insertOne(newItem);
        return newItem;
    }

    findByRestaurantUuid(restaurantUuid: string): Promise<Array<IOffer>> {
        return this.collection.find({restaurantUuid}).toArray();
    }

    getItem(uuid: string): Promise<IOffer | null> {
        return this.collection.findOne({uuid});
    }

    getItems(): Promise<IOffer[]> {
        return this.collection.find({deleted: false}).limit(20).toArray();
    }
}
