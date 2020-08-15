import { BaseComponent } from '../../../base';
export interface MbscWeekDayOptions {
    key: any;
    event: any;
    index?: number;
    rtl?: boolean;
    theme?: string;
    firstDay?: number;
    selected?: boolean;
    isToday: boolean;
    dayNames: string[];
    selectable?: boolean;
    selectDate?: any;
}
export interface MbscWeekDayState {
    hasHover: boolean;
}
/** @hidden */
export declare class WeekDayBase extends BaseComponent<MbscWeekDayOptions, MbscWeekDayState> {
    _cssClass: string;
    private _unlisten;
    _onClick: () => void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: MbscWeekDayOptions, state: MbscWeekDayState): void;
}
