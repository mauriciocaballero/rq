import { BaseComponent } from '../../base';
import { ICalendarProps, IPageChangeEvent, IPageLoadedEvent, IPageLoadingEvent, MbscCalendarLabel } from '../../shared/calendar-view/calendar-view';
import { DateType, formatDate, parseDate } from '../../util/datetime';
export { getJson } from '../../util/http';
export { formatDate, parseDate };
export interface MbscSelectedDateChangeEvent {
    date: DateType;
}
export interface MbscCellClickEvent {
    date: Date;
    domEvent: any;
    events: MbscCalendarEvent[];
    selected: boolean;
    target: HTMLElement;
}
export interface MbscEventClickEvent {
    date: Date;
    domEvent: any;
    event: MbscCalendarEvent;
    inst: EventcalendarBase;
}
export interface MbscLabelClickEvent {
    date: Date;
    domEvent: any;
    event: MbscCalendarEvent;
    inst: EventcalendarBase;
}
export interface MbscPageChangeEvent {
    firstDay: Date;
    lastDay: Date;
    inst: EventcalendarBase;
}
export interface MbscPageLoadingEvent {
    firstDay: Date;
    lastDay: Date;
    inst: EventcalendarBase;
}
export interface MbscPageLoadedEvent {
    firstDay: Date;
    lastDay: Date;
    inst: EventcalendarBase;
}
export interface MbscEventcalendarView {
    agenda?: {
        type?: 'day' | 'week' | 'month' | 'day';
        scrollable?: boolean;
        size?: number;
    };
    calendar?: {
        count?: boolean;
        labels?: boolean;
        outerDays?: boolean;
        popover?: boolean;
        popoverClass?: string;
        scroll?: 'horizontal' | 'vertical';
        size?: number;
        type?: 'month' | 'week';
        weekNumbers?: boolean;
    };
    schedule?: {
        type?: 'day' | 'week';
        days?: boolean;
    };
}
export interface MbscEventcalendarOptions extends ICalendarProps {
    colorEventList?: boolean;
    data?: MbscCalendarEvent[];
    defaultSelectedDate?: DateType;
    selectedDate?: DateType;
    view?: MbscEventcalendarView;
    allDayText?: string;
    noEventsText?: string;
    /** @hidden */
    eventTemplate?: any;
    renderAgenda?(events: MbscEventList[], options: MbscEventcalendarOptions, dayRefs: {
        [key: number]: HTMLElement | null;
    }): any;
    renderEvent?(data: MbscCalendarEventData): any;
    renderEventContent?(data: MbscCalendarEventData): any;
    renderHeader?(): any;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
    renderScheduleEvent?(event: MbscCalendarEventData): any;
    renderScheduleEventContent?(event: MbscCalendarEventData): any;
    onCellClick?(args: MbscCellClickEvent, inst: EventcalendarBase): void;
    onEventClick?(args: MbscEventClickEvent, inst: EventcalendarBase): void;
    onLabelClick?(args: MbscLabelClickEvent, inst: EventcalendarBase): void;
    onPageChange?(args: MbscPageChangeEvent, inst: EventcalendarBase): void;
    onPageLoading?(args: MbscPageLoadingEvent, inst: EventcalendarBase): void;
    onPageLoaded?(args: MbscPageLoadedEvent, inst: EventcalendarBase): void;
    onSelectedDateChange?(args: MbscSelectedDateChangeEvent, inst: EventcalendarBase): void;
}
/** @hidden */
export interface MbscEventcalendarState {
    activeDate?: number;
    eventList?: MbscEventList[];
    scheduleEventList?: any[];
    isListScrollable?: boolean;
    popoverDate?: number | undefined;
    popoverList?: MbscCalendarEventData[];
    selectedDate?: number;
    showPopover?: boolean;
    showShadow?: boolean;
    width?: number;
}
export interface MbscCalendarEvent extends MbscCalendarLabel {
    id?: string | number;
    title?: string;
    allDay?: boolean;
}
export interface MbscCalendarEventData {
    allDay?: string;
    end?: string;
    endDate?: any;
    html?: any;
    id?: any;
    isMultiDay?: boolean;
    lastDay?: string;
    original?: MbscCalendarEvent;
    position?: any;
    start?: string;
    startDate?: any;
    style?: any;
    title?: string;
}
export interface MbscEventList {
    date: string;
    events: MbscCalendarEventData[];
    timestamp: number;
}
/** @hidden */
export declare class EventcalendarBase extends BaseComponent<MbscEventcalendarOptions, MbscEventcalendarState> {
    /** @hidden */
    static defaults: MbscEventcalendarOptions;
    protected static _name: string;
    state: MbscEventcalendarState;
    eventList: MbscEventList[] | undefined;
    scheduleEventList: any[] | undefined;
    /** @hidden */
    _active: number;
    /** @hidden */
    _anchor: HTMLDivElement;
    /** @hidden */
    _calendarScroll: 'horizontal' | 'vertical' | undefined;
    /** @hidden */
    _calendarSize: number;
    /** @hidden */
    _calendarType: 'month' | 'week';
    /** @hidden */
    _colorEventList: boolean;
    /** @hidden */
    _dayNames: string[];
    /** @hidden */
    _eventListType: 'year' | 'month' | 'week' | 'day';
    /** @hidden */
    _eventListSize: number;
    /** @hidden */
    _cssClass: string;
    /** @hidden */
    _selectedDates: {
        [key: number]: boolean;
    };
    /** @hidden */
    _selected: number;
    /** @hidden */
    _list: HTMLElement;
    /** @hidden */
    _listDays: {
        [key: number]: HTMLElement | null;
    } | null;
    /** @hidden */
    _pageLoad: number;
    /** @hidden */
    _popoverClass: string;
    /** @hidden */
    _renderTimeIndicator: boolean | undefined;
    /** @hidden */
    _scheduleType: 'week' | 'day';
    /** @hidden */
    _selectedDateTime: number | undefined;
    /** @hidden */
    _selectedDateHeader: string;
    /** @hidden */
    _scheduleEl: HTMLElement;
    /** @hidden */
    _scheduleWeekDayList: any[];
    /** @hidden */
    _showCalendar: boolean | undefined;
    /** @hidden */
    _showDate: boolean | undefined;
    /** @hidden */
    _showEventCount: boolean | undefined;
    /** @hidden */
    _showEventLabels: boolean | undefined;
    /** @hidden */
    _showEventList: boolean | undefined;
    /** @hidden */
    _showEventPopover: boolean | undefined;
    /** @hidden */
    _showOuterDays: boolean | undefined;
    /** @hidden */
    _showSchedule: boolean | undefined;
    /** @hidden */
    _showScheduleDays: boolean | undefined;
    /** @hidden */
    _showWeekNumbers: boolean | undefined;
    /** @hidden */
    _timeIndicatorElm: HTMLElement;
    /** @hidden */
    _timeIndicatorChildElm: HTMLElement;
    /** @hidden */
    _onScroll: (...args: any[]) => void;
    /** @hidden */
    _onScheduleScroll: (...args: any[]) => void;
    protected _eventListHTML: any;
    protected _shouldLoadDays: boolean;
    private _defaultDate;
    private _eventMap;
    private _events;
    private _isListScrolling;
    private _isPageChange;
    private _maxDate;
    private _minDate;
    private _refresh;
    private _shouldAnimateScroll;
    private _shouldScroll;
    private _shouldScrollSchedule;
    private _shouldSkipScroll;
    /**
     * Sets the events for the calendar.
     * @param events Array containing the events.
     */
    addEvent(events: MbscCalendarEvent | MbscCalendarEvent[]): string[];
    /**
     * Retrieves events from the calendar.
     */
    getEvents(): MbscCalendarEvent[];
    /**
     * Sets the events for the calendar.
     * @param events Array containing the events.
     */
    setEvents(events: MbscCalendarEvent[]): string[];
    /**
     * Removes one or more events from the calendar.
     * @param events
     */
    removeEvent(events: string | number | MbscCalendarEvent | string[] | number[] | MbscCalendarEvent[]): void;
    /**
     * Navigates the calendar to the specified date.
     * @param date
     */
    navigate(date: DateType, animate?: boolean): void;
    /**
     * Updates one or more events in the calendar.
     * @param events
     */
    updateEvent(events: MbscCalendarEvent | MbscCalendarEvent[]): void;
    /** @hidden */
    _getEventData(event: MbscCalendarEvent, eventDay: number): MbscCalendarEventData;
    /** @hidden */
    _isToday(d: number): boolean;
    /** @hidden */
    _formatScheduleTime(i: number): string;
    /** @hidden */
    _onWeekDayClick: (d: number) => void;
    /** @hidden */
    _onDayClick: (args: any) => void;
    /** @hidden */
    _onActiveChange: (args: any) => void;
    /** @hidden */
    _onGestureStart: (args: any) => void;
    /** @hidden */
    _onEventClick: (args: any) => void;
    /** @hidden */
    _onLabelClick: (args: any) => void;
    _onCellClick: (args: any) => void;
    /** @hidden */
    _onPageChange: (args: IPageChangeEvent) => void;
    /** @hidden */
    _onPageLoading: (args: IPageLoadingEvent) => void;
    /** @hidden */
    _onPageLoaded: (args: IPageLoadedEvent) => void;
    /** @hidden */
    _onPopoverClose: () => void;
    /** @hidden */
    _onResize: (ev: any) => void;
    protected _render(s: MbscEventcalendarOptions, state: MbscEventcalendarState): void;
    protected _updated(): void;
    private _getAgendaEvents;
    private _getScheduleEvents;
    private _setEventList;
    private _hidePopover;
    private _scrollToDay;
    private _scrollToTime;
    private _selectedChange;
}
