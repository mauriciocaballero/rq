import { BaseComponent } from '../../../base';
import { MbscCalendarEventData } from '../eventcalendar';
export interface MbscScheduleEventOptions {
    allDayText?: string;
    event: MbscCalendarEventData;
    outerEvent?: any;
    isAllDay: boolean;
    key?: any;
    rtl?: boolean;
    contentTemplate?: any;
    timestamp: number;
    theme: string;
    onEventClick(arg: any): void;
    renderContent?(event: MbscCalendarEventData): any;
    render?(event: MbscCalendarEventData): any;
}
export interface MbscScheduleEventState {
    hasHover: boolean;
    hasFocus: boolean;
}
/** @hidden */
export declare class ScheduleEventBase extends BaseComponent<MbscScheduleEventOptions, MbscScheduleEventState> {
    _cssClass: string;
    _isPlaceholder: boolean;
    _html: any;
    _content: any;
    protected _shouldEnhance: boolean;
    private _unlisten;
    _onClick: (ev: any) => void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: MbscScheduleEventOptions, state: MbscScheduleEventState): void;
}
