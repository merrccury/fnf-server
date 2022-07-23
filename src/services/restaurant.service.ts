import {Inject, Injectable} from '@nestjs/common';
import {IGeneralEntity, ILogger, IRestaurant, IRestaurantRepository} from "../interfaces";


@Injectable()
export class RestaurantService {
    constructor(@Inject('ILogger') private readonly logger: ILogger,
                @Inject('IRestaurantRepository') private readonly restaurantRepository: IRestaurantRepository) {
    }

    getRestaurants(): Promise<IRestaurant[]> {
        return this.restaurantRepository.getItems();
    }


    getRestaurant = (uuid: string): Promise<IRestaurant | null> => this.restaurantRepository.getItem(uuid)


    addRestaurant(restaurant: Omit<IRestaurant, keyof IGeneralEntity>): Promise<IRestaurant> {
        return this.restaurantRepository.addItem(restaurant);
    }


}
