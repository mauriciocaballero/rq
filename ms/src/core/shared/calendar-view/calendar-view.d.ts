import { BaseComponent } from '../../base';
import { IDatetimeProps } from '../../util/datetime';
import { MbscRecurrenceRule } from '../../util/recurrence';
import { MbscCalendarEventData } from '../../components/eventcalendar/eventcalendar';
import { InstanceServiceBase } from '../instance-service';
export declare type ViewType = 'month' | 'year' | 'multi-year';
export declare const MONTH_VIEW = "month";
export declare const YEAR_VIEW = "year";
export declare const MULTI_YEAR_VIEW = "multi-year";
export declare const PAGE_WIDTH = 296;
export interface IPageChangeEvent {
    firstDay: Date;
    lastDay: Date;
    viewStart: Date;
    viewEnd: Date;
}
export interface IPageLoadingEvent {
    firstDay: Date;
    lastDay: Date;
    viewChanged: boolean;
    viewStart: Date;
    viewEnd: Date;
    inst: CalendarViewBase;
}
export interface IPageLoadedEvent {
    activeElm: HTMLDivElement;
    firstDay: Date;
    lastDay: Date;
    viewStart: Date;
    viewEnd: Date;
}
export interface ICalendarData {
    date?: Date | string | {};
    start?: Date | string | {};
    end?: Date | string | {};
    recurring?: MbscRecurrenceRule | string;
    [x: string]: any;
}
export interface MbscCalendarLabel extends ICalendarData {
    text?: string;
    html?: string;
    color?: string;
}
export interface MbscCalendarMarked extends ICalendarData {
    color?: string;
}
export interface MbscCalendarColor extends ICalendarData {
    background?: string;
}
/** @hidden */
export interface ICalendarProps extends IDatetimeProps {
    cssClass?: string;
    colors?: MbscCalendarColor[];
    downIcon?: string;
    height?: number | string;
    labels?: MbscCalendarLabel[];
    marked?: MbscCalendarMarked[];
    mousewheel?: boolean;
    nextIconH?: string;
    nextIconV?: string;
    prevIconH?: string;
    prevIconV?: string;
    showControls?: boolean;
    showLabelCount?: boolean;
    showToday?: boolean;
    upIcon?: string;
    width?: number | string;
    dateText?: string;
    eventText?: string;
    eventsText?: string;
    firstDay?: number;
    moreEventsText?: string;
    moreEventsPluralText?: string;
    nextText?: string;
    prevText?: string;
    timeText?: string;
    onResize?(args: {}, inst: CalendarViewBase): void;
}
/** @hidden */
export interface ICalendarViewProps extends ICalendarProps {
    activeDate?: number;
    calendarScroll?: 'horizontal' | 'vertical';
    calendarType?: 'month' | 'week';
    className?: string;
    eventRange?: 'year' | 'month' | 'week' | 'day';
    eventRangeSize?: number;
    instanceService?: InstanceServiceBase;
    hasContent?: boolean;
    pageLoad?: number;
    pages?: number | 'auto';
    responsiveStyle?: boolean;
    selectedDates?: any;
    showEventList?: boolean;
    showCalendar?: boolean;
    showSchedule?: boolean;
    showOuterDays?: boolean;
    showWeekNumbers?: boolean;
    weeks?: number;
    onActiveChange?(args: any, inst: any): void;
    onDayClick?(args: any, inst: any): void;
    onGestureStart?(args: any, inst: any): void;
    onLabelClick?(args: any, inst: any): void;
    onPageChange?(args: IPageChangeEvent, inst: any): void;
    onPageLoaded?(args: IPageLoadedEvent, inst: any): void;
    onPageLoading?(args: IPageLoadingEvent, inst: any): void;
    renderHeader?(): any;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
}
/** @hidden */
export interface ICalendarViewState {
    cellSizes?: number[];
    maxLabels: number;
    pageSize: number;
    pickerSize: number;
    height: 'sm' | 'md';
    width: 'sm' | 'md';
    view: ViewType;
    viewClosing?: ViewType;
    viewOpening?: ViewType;
}
/** @hidden */
export interface ICalendarViewHost {
    _theme: string;
    _calendarView: CalendarViewBase;
    _instanceService: InstanceServiceBase;
}
export declare const calendarViewDefaults: ICalendarProps;
/** @hidden */
export declare function getPageNr(pages: number | 'auto' | undefined, width: number): number;
/** @hidden */
export declare function getLabels(labelsObj: {
    [key: number]: any[];
}, start: Date, end: Date, maxLabels: number, s: ICalendarProps, allDayOnly?: boolean): {};
/** @hidden */
export declare function sortEvents(events: MbscCalendarLabel[]): MbscCalendarLabel[];
/** @hidden */
export declare class CalendarViewBase extends BaseComponent<ICalendarViewProps, ICalendarViewState> {
    state: ICalendarViewState;
    _marksMap?: {};
    _labelsMap?: {};
    _headerHTML?: any;
    _headerContent?: any;
    _active: number;
    _activeMonth: number;
    _axis: 'X' | 'Y';
    _body: HTMLElement;
    _cssClass: string;
    _colors: {} | undefined;
    _dayNames: string[];
    _dim: any;
    _firstDay: Date;
    _firstPage: HTMLElement;
    _hasPicker: boolean;
    _isVertical: boolean;
    _invalid: {} | undefined;
    _pageIndex: number;
    _prevIcon: string;
    _labels: {} | undefined;
    _lastDay: Date;
    _marked: {} | undefined;
    _maxDate: Date | number;
    _maxIndex: number;
    _maxYear: Date | number;
    _maxYearIndex: number;
    _maxYears: number;
    _maxYearsIndex: number;
    _minDate: Date | number;
    _minIndex: number;
    _minYear: Date | number;
    _minYearIndex: number;
    _minYears: number;
    _minYearsIndex: number;
    _months: any[];
    _mousewheel: boolean;
    _nextIcon: string;
    _pageNr: number;
    _pickerBtn: HTMLElement;
    _pickerCont: HTMLElement;
    _prevAnim: boolean;
    _rtlNr: number;
    _showOuter: boolean;
    _title: any[];
    _valid: {} | undefined;
    _viewTitle: string;
    _weeks: number;
    _yearFirst: boolean;
    _yearIndex: number;
    _yearOffset: number;
    _yearsIndex: number;
    _yearsOffset: number;
    MONTH_VIEW: ViewType;
    YEAR_VIEW: ViewType;
    MULTI_YEAR_VIEW: ViewType;
    protected _renderHeader?: (s: ICalendarViewProps, state: ICalendarViewState) => any;
    protected _shouldEnhanceHeader: boolean;
    private _doc;
    private _headerLastHTML;
    private _isIndexChange;
    private _isSwipeChange;
    private _maxLabels;
    private _observer;
    private _offset;
    private _prevClick;
    private _viewEnd;
    private _viewStart;
    private _shouldCheckSize;
    private _shouldFocus;
    private _shouldPageLoad;
    /**
     * Navigates to next page
     */
    nextPage: () => void;
    /**
     * Navigates to previous page
     */
    prevPage: () => void;
    _changeView: (newView?: ViewType) => void;
    _getPageDay(pageIndex: number): number;
    _getPageStyle(index: number, offset: number, pageNr?: number): {};
    _getPageYear(pageIndex: number): number;
    _getPageYears(pageIndex: number): number;
    _getPickerClass(view: ViewType): string;
    _isNextDisabled(isModalPicker?: boolean): boolean;
    _isPrevDisabled(isModalPicker?: boolean): boolean;
    _onDayClick: (args: any) => void;
    _onTodayClick: (args: any) => void;
    _onMonthClick: (args: any) => void;
    _onYearClick: (args: any) => void;
    _onPageChange: (args: any) => void;
    _onYearPageChange: (args: any) => void;
    _onYearsPageChange: (args: any) => void;
    _onAnimationEnd: (args: any) => void;
    _onGestureStart: (args: any) => void;
    _onGestureEnd: (args: any) => void;
    _onPickerClose: () => void;
    _onPickerOpen: () => void;
    _onPickerBtnClick: (ev: any) => void;
    _onDocClick: (ev: any) => void;
    _onViewClose: () => void;
    _onViewOpen: () => void;
    _onResize: () => void;
    _onKeyDown: (ev: any) => void;
    protected _render(s: ICalendarViewProps, state: ICalendarViewState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _getActiveCell;
    private _focusActive;
    private _pageLoaded;
    private _activeChange;
    private _activeYearsChange;
    private _activeYearChange;
    private _prevDocClick;
}
