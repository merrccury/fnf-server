import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantsService, LoggerService } from '../services';

@Module({
    imports: [],
    controllers: [RestaurantController],
    providers: [RestaurantsService, LoggerService],
})
export class RestaurantsModule {

}
