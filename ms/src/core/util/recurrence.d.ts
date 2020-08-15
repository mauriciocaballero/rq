import { DateType, IDatetimeProps } from './datetime';
export interface MbscRecurrenceRule {
    repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval?: number;
    count?: number;
    from?: DateType;
    until?: DateType;
    month?: number;
    day?: number;
    weekDays?: string;
}
export declare function parseRule(ruleStr: string): MbscRecurrenceRule;
/** @hidden */
export declare function getOccurrences(rule: MbscRecurrenceRule | string, dtStart: Date, start: Date, end: Date, s: IDatetimeProps): Date[];
/** @hidden */
export declare function getEventMap(list: any[], start: Date, end: Date, s: IDatetimeProps, displayFormat?: string): {} | undefined;
