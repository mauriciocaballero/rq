import { BaseComponent, IBaseProps } from '../../base';
import { MbscCalendarEventData } from '../../components/eventcalendar/eventcalendar';
/** @hidden */
export interface ICalendarDayProps extends IBaseProps {
    active?: boolean;
    bodyRef?: HTMLElement;
    colors?: any;
    date?: number;
    day?: string;
    dayWidths?: number[];
    dayIndex?: number;
    disabled?: boolean;
    display?: boolean;
    hasMarks?: boolean;
    labels?: any;
    marks?: any;
    month?: string;
    outer?: boolean;
    rtl?: boolean;
    selected?: boolean;
    text?: string;
    theme?: string;
    timeFormat?: string;
    type?: 'day' | 'month' | 'year';
    update?: any;
    eventText?: string;
    eventsText?: string;
    todayText?: string;
    onDayClick?(args: any, inst: any): void;
    onLabelClick?(args: any, inst: any): void;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
}
/** @hidden */
export interface ICalendarDayState {
    hasFocus?: boolean;
    hasHover?: boolean;
}
/** @hidden */
export declare class CalendarDayBase extends BaseComponent<ICalendarDayProps, ICalendarDayState> {
    _ariaLabel: string;
    _cssClass: string;
    _colorStyles: any;
    _todayClass: string;
    private _unlisten;
    _onClick: (ev: any) => void;
    _onLabelClick: (args: any) => void;
    /** Returns the width of a label
     * @param {number} labelWidth Width of the label in percent - how many day widths does it expand (for 3 day event it is 300%)
     */
    _width: (labelWidth: number) => string;
    protected _mounted(): void;
    protected _render(s: ICalendarDayProps, state: ICalendarDayState): void;
    protected _destroy(): void;
}
