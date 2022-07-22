import {Controller, Get, HttpException, HttpStatus, Param, Query} from '@nestjs/common';
import {RestaurantsService} from "../services/restaurants.service";

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantsService) {
    }

    @Get(':uuid')
    getHello(@Param() params: {uuid:string}, @Query() queries): string {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        const {uuid} = params;
        return this.restaurantService.getRestaurant(uuid);
    }
}
