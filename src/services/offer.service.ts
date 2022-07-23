import {Inject, Injectable} from '@nestjs/common';
import {IGeneralEntity, ILogger, IRestaurant, IOfferRepository, IOffer} from "../interfaces";


@Injectable()
    export class OfferService {
    constructor(@Inject('ILogger') private readonly logger: ILogger,
                @Inject('IOfferRepository') private readonly offerRepository: IOfferRepository) {
    }

    getOffers(): Promise<IOffer[]> {
        return this.offerRepository.getItems();
    }


    getOffer = (uuid: string): Promise<IOffer | null> => this.offerRepository.getItem(uuid)


    addOffer(restaurant: Omit<IOffer, keyof IGeneralEntity>): Promise<IOffer> {
        return this.offerRepository.addItem(restaurant);
    }


}
