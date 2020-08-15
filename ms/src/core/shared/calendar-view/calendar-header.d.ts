/** @jsx createElement */
import { PureComponent } from '@framework/renderer';
import { ICalendarViewHost } from './calendar-view';
export declare const CalendarContext: import("../../../preact/lib/src").Context<{
    instance?: ICalendarViewHost;
}>;
/** @hidden */
export interface IInstanceSubscriberProps {
    host?: ICalendarViewHost;
    component: any;
    [key: string]: any;
}
export declare class InstanceSubscriber extends PureComponent<IInstanceSubscriberProps, {}> {
    private handler;
    private contextHost?;
    constructor(props: IInstanceSubscriberProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): import("../../../preact/lib/src").VNode<any>;
    protected setupService(): void;
}
export interface ICalendarHeaderProp {
    calendar?: ICalendarViewHost;
    className?: string;
}
export declare const CalendarPrev: {
    ({ calendar, ...others }: ICalendarHeaderProp): any;
    _name: string;
};
export declare const CalendarNext: {
    ({ calendar, ...others }: ICalendarHeaderProp): any;
    _name: string;
};
export declare const CalendarToday: {
    ({ calendar, ...others }: ICalendarHeaderProp): any;
    _name: string;
};
export declare const CalendarNav: {
    ({ calendar, ...others }: ICalendarHeaderProp): any;
    _name: string;
};
