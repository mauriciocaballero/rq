import { BaseComponent, IBaseProps } from '../../base';
import { MbscCalendarEventData } from '../../components/eventcalendar/eventcalendar';
import { DateType } from '../../util/datetime';
/** @hidden */
export interface IMonthViewProps extends IBaseProps {
    activeDate: number;
    bodyRef?: HTMLElement;
    calendarType: 'month' | 'week';
    cellSizes?: number[];
    colors?: {
        [key: number]: any[];
    };
    dayNames: string[];
    dayNamesShort: string[];
    eventText: string;
    eventsText: string;
    firstDay: number;
    firstPageDay: number;
    hasMarks?: boolean;
    isActive: boolean;
    invalid?: {
        [key: number]: any[];
    };
    labels?: {
        [key: number]: any[];
    };
    marked?: {
        [key: number]: any[];
    };
    max?: DateType;
    min?: DateType;
    monthNames: string[];
    selectedDates?: any;
    showOuter?: boolean;
    showSingleMark?: boolean;
    showWeekDays: boolean;
    showWeekNumbers?: boolean;
    todayText: string;
    timeFormat?: string;
    valid?: {
        [key: number]: any[];
    };
    weeks: number;
    getDate(y: number, m: number, d: number): Date;
    getDay(d: Date): number;
    getMonth(d: Date): number;
    getWeekNumber(d: Date): number;
    getYear(d: Date): number;
    onDayClick?(args: any, inst: any): void;
    onLabelClick?(args: any, inst: any): void;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
}
/** @hidden */
export declare class MonthViewBase extends BaseComponent<IMonthViewProps, any> {
    _days: number[];
    _rows: any[];
    _isActive(d: number): boolean;
    _isValid(d: number): boolean | any[];
    _isSelected(d: number): boolean;
    _onDayClick: (ev: any) => void;
    _getWeekNr(s: IMonthViewProps, date: number): number;
    protected _render(s: IMonthViewProps): void;
}
