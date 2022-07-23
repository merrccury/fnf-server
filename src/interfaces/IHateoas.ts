import {IGeneralEntity} from "./models/IGeneralEntity";

export type IHateoasItem = {
    href: string;

    [key: string]: any
}

export interface IHateoas<M extends IGeneralEntity> {
    _links: {
        self: IHateoasItem,
        items: Array<IHateoasItem>
    }
    _embedded: {
        [key: string]: Array<{
            _links: {
                self: IHateoasItem,
                [key: string]: IHateoasItem
            }
            [key: string]: any
        }>
    },
}
