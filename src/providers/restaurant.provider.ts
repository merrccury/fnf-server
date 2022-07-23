import {Db} from "mongodb";

export const restaurantProvider = [
    {
        provide: 'RESTAURANT_COLLECTION',
        useFactory: (dataSource: Db) => dataSource.collection('restaurants'),
        inject: ['DATA_SOURCE']
    }
]
