import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantsService } from '../services/restaurants.service';
import {LoggerService} from "../helpers";

@Module({
    imports: [LoggerService],
    controllers: [RestaurantController],
    providers: [RestaurantsService, LoggerService],
})
export class RestaurantsModule {

}
