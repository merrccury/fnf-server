import {DayOfTheWeek} from "../enums";

export interface IAvailableTime {
    day: DayOfTheWeek,
    start: Date,
    end: Date
}
