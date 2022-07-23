import {Module} from '@nestjs/common';
import {OfferModule, RestaurantModule} from "./modules";

@Module({
    imports: [RestaurantModule, OfferModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
