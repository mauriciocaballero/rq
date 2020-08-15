import { CalendarViewBase, ICalendarViewProps, ICalendarViewState } from './calendar-view';
import '../../base.scss';
import './calendar-view.scss';
/** @hidden */
export declare class CalendarView extends CalendarViewBase {
    private _headerElement;
    private _calendarHost?;
    protected _setHeader: (el: HTMLDivElement) => void;
    protected _setBody: (el: any) => void;
    protected _setPickerCont: (el: any) => void;
    protected _renderMonth: (item: any, offset: number) => any;
    protected _renderYears: (item: any, offset: number) => any;
    protected _renderYear: (item: any, offset: number) => any;
    protected _renderHeader: (s: ICalendarViewProps, state: ICalendarViewState) => any;
    protected _template(s: ICalendarViewProps, state: ICalendarViewState): import("../../../preact/lib/src").VNode<any>;
    protected _init(): void;
    protected _updated(): void;
}
