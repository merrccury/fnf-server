import {Injectable} from '@nestjs/common';
import {version as uuidVersion} from 'uuid';
import {validate as uuidValidate} from 'uuid';
import {LoggerService} from "./logger.service";

function uuidValidateV4(uuid) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

@Injectable()
export class RestaurantsService {
    constructor(private readonly logger: LoggerService) {
    }

    getRestaurant(uuid: string): string {
        return uuidValidateV4(uuid) ? `Restaurant with uuid ${uuid}` : 'Invalid uuid';
    }

}
