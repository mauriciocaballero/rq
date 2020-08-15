import { CalendarDayBase, ICalendarDayProps } from './calendar-day';
/** @hidden */
export declare class CalendarDay extends CalendarDayBase {
    protected _renderEvent(s: ICalendarDayProps, label?: any, showText?: boolean, key?: number): any;
    protected _renderLabel(s: ICalendarDayProps, label: any): any;
    protected _template(s: ICalendarDayProps): any;
}
