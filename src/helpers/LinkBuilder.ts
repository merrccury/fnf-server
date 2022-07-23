import {EntityType} from "src/enums";
import {IGeneralEntity} from "../interfaces";

export class LinkBuilder<M extends IGeneralEntity> {
    constructor(model: M, entityType: EntityType) {
        this.model = model;
        this.entityType = entityType;
    }

    private readonly model: M;
    private readonly entityType: EntityType;

    

}
