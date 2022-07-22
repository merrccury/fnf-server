export interface IItem {
    uuid: string;
    restaurantUuid: string;
    title: string;
    description: string;
    photos: Array<string>;
    isAvailable: boolean;
    price: number;
    deleted: boolean;
    createdAt: Date;
}
