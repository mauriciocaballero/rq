import { MbscCalendarEventData } from '../../../core/components/eventcalendar/eventcalendar';
import { BaseComponent, IBaseProps } from '../../base';
/** @hidden */
export interface ICalendarLabelProps extends IBaseProps {
    bodyRef?: HTMLElement;
    date?: number;
    event?: any;
    id?: any;
    more?: string;
    rtl?: boolean;
    showText?: boolean;
    theme?: string;
    timeFormat?: string;
    contentTemplate?: any;
    template?: any;
    renderContent?(event: MbscCalendarEventData): any;
    render?(event: MbscCalendarEventData): any;
    onLabelClick?(args: any): void;
}
/** @hidden */
export declare class CalendarLabelBase extends BaseComponent<ICalendarLabelProps, {}> {
    _cssClass: string;
    _data: any;
    _style: any;
    _title: string | undefined;
    _html: any;
    _content: any;
    _shouldEnhance: boolean;
    private _unlisten;
    _onClick: (ev: any) => void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: ICalendarLabelProps): void;
}
