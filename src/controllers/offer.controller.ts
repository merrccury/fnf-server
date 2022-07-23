import {Body, Controller, Get, HttpException, HttpStatus, Inject, Param, Post, Query} from '@nestjs/common';
import {IGeneralEntity, IOffer, IOfferRepository} from "../interfaces";
import {isNil} from "lodash";
import {OfferService} from "../services/offer.service";

@Controller('offers')
export class OfferController {
    constructor(private readonly offerService: OfferService) {
    }

    @Get()
    getRestaurants(): Promise<IOffer[]> {
        return this.offerService.getOffers();
    }

    @Get(':uuid')
    async getRestaurant(@Param() params: { uuid: string }, @Query() queries): Promise<IOffer> {
        const {uuid} = params;
        const targetOffer = await this.offerService.getOffer(uuid);
        if (isNil(targetOffer)) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }

        // const linkBuilder = new RestaurantLinkBuilder(targetRestaurant);
        return targetOffer;
    }

    @Post()
    async addRestaurant(@Body() body: Omit<IOffer, keyof IGeneralEntity>): Promise<IOffer> {
        return this.offerService.addOffer(body);
    }
}
