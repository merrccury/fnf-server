import {Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post, Query} from '@nestjs/common';
import {RestaurantService} from "../services";
import {ServerException} from "../exceptions";
import {IGeneralEntity, IHateoas, IOfferRepository, IRestaurant} from "../interfaces";
import {isNil} from "lodash";
import {RestaurantLinkBuilder} from "../helpers/RestaurantLinkBuilder";

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService,
                @Inject('IOfferRepository') private readonly offerRepository: IOfferRepository) {
    }

    @Get()
    getRestaurants(): Promise<IRestaurant[]> {
        return this.restaurantService.getRestaurants();
    }

    @Get(':uuid')
    async getRestaurant(@Param() params: { uuid: string }, @Query() queries): Promise<IHateoas<IRestaurant>> {
        const {uuid} = params;
        const targetRestaurant = await this.restaurantService.getRestaurant(uuid);
        if (isNil(targetRestaurant)) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        const linkBuilder = new RestaurantLinkBuilder(targetRestaurant);
        const relatedOffers = await this.offerRepository.findByRestaurantUuid(uuid);
        console.log({uuid, relatedOffers})
        linkBuilder.linkTo('offers', relatedOffers)
        return linkBuilder.getModel();
    }

    @Post()
    async addRestaurant(@Body() body: Omit<IRestaurant, keyof IGeneralEntity>): Promise<IRestaurant> {
        return this.restaurantService.addRestaurant(body);
    }
}
