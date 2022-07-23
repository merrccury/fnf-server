import {Db} from "mongodb";

export const offerProvider = [
    {
        provide: 'OFFER_COLLECTION',
        useFactory: (dataSource: Db) => dataSource.collection('offers'),
        inject: ['DATA_SOURCE']
    }
]
