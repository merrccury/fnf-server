import {IGeneralEntity} from "../models/IGeneralEntity";

export interface IRepository <M extends IGeneralEntity>{
    getItem(uuid: string): Promise<M | null>;

    addItem(item: Omit<M, keyof IGeneralEntity>): Promise<M>;

    getItems(): Promise<M[]>;

}
