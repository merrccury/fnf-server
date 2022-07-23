import {IGeneralEntity, IHateoas, IRestaurant} from "../interfaces";

export class RestaurantLinkBuilder {
    constructor(restaurant: IRestaurant) {
        this.restaurant = restaurant;
        this.model = {
            _links: {
                self: {
                    ...restaurant,
                    href: this.getSelfLink()
                },
                items: []
            },
            _embedded: {}
        }
    }


    private readonly restaurant: IRestaurant;
    private readonly model: IHateoas<IRestaurant>;

    public linkTo(field: string, data: Array<IGeneralEntity>) : RestaurantLinkBuilder {
        this.model._embedded[field] = data.map(item => {
            return {
                _links: {
                    self: {
                        href: `/${field}/${item.uuid}`,
                    },
                }
            }
        });
        return this
    }

    public getSelfLink(): string {
        return `/restaurants/${this.restaurant.uuid}`;
    }

    public getModel(): IHateoas<IRestaurant> {
        return this.model;
    }

}
