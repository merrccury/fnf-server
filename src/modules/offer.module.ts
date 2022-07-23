import {Module} from "@nestjs/common";
import {LoggerService, OfferService} from "../services";
import {OfferController} from "../controllers";
import {DatabaseModule} from "./database.module";
import {offerProvider} from "../providers";
import {OfferRepository} from "../repositories";

@Module({
    imports: [DatabaseModule],
    controllers: [OfferController],
    providers: [OfferService, {
        provide: 'ILogger',
        useClass: LoggerService,
    }, {
        provide: 'IOfferRepository',
        useClass: OfferRepository,
    }, ...offerProvider],
})
export class OfferModule {

}
