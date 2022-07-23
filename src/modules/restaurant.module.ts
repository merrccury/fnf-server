import {Module} from '@nestjs/common';
import {RestaurantController} from '../controllers';
import {LoggerService, RestaurantService} from '../services';
import {ILogger} from "../interfaces";
import {offerProvider, restaurantProvider} from "../providers";
import {DatabaseModule} from "./database.module";
import {RestaurantRepository, OfferRepository} from "../repositories";

@Module({
    imports: [DatabaseModule],
    controllers: [RestaurantController],
    providers: [RestaurantService, {
        provide: 'ILogger',
        useClass: LoggerService,
    }, {
        provide: 'IOfferRepository',
        useClass: OfferRepository
    }, {
        provide: 'IRestaurantRepository',
        useClass: RestaurantRepository,
    },
        ...restaurantProvider, ...offerProvider],
})
export class RestaurantModule {

}
