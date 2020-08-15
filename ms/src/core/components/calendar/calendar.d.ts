import { CalendarViewBase, ICalendarProps } from '../../shared/calendar-view/calendar-view';
import { IPickerProps, PickerBase } from '../../shared/picker/picker';
/**
 * Calendar options
 * @interface MbscCalendarOptions
 */
export interface MbscCalendarOptions extends IPickerProps, ICalendarProps {
    calendarType?: 'month' | 'week';
    calendarScroll?: 'horizontal' | 'vertical';
    pages?: number | 'auto';
    selectMax?: number;
    selectMin?: number;
    selectMultiple?: boolean;
    showOuterDays?: boolean;
    showWeekNumbers?: boolean;
    weeks?: number;
    selectedText?: string;
    selectedPluralText?: string;
    /** @hidden */
    calendarHeaderTemplate?: any;
    renderCalendarHeader?(): any;
    onCellClick?(args: any, inst: any): void;
    onLabelClick?(args: any, inst: any): void;
    onPageChange?(args: any, inst: any): void;
    onPageLoaded?(args: any, inst: any): void;
    onPageLoading?(args: any, inst: any): void;
}
/** @hidden */
export interface MbscCalendarState {
    activeDate?: number;
    activeTab?: string;
    isOpen?: boolean;
    pages?: number;
    value?: any;
    width?: string;
}
/** @hidden */
export declare class CalendarBase extends PickerBase<MbscCalendarOptions, MbscCalendarState> {
    /** @hidden */
    static defaults: MbscCalendarOptions;
    protected static _name: string;
    value: any;
    /** @hidden */
    _active: number;
    /** @hidden */
    _calendarView: CalendarViewBase;
    /** @hidden */
    _cssClass: string;
    /** @hidden */
    _selected: Date | undefined;
    /** @hidden */
    _showCalendar: boolean | undefined;
    /** @hidden */
    _showTime: boolean | undefined;
    private _max;
    private _min;
    /** @hidden */
    _onDayClick: (args: any) => void;
    /** @hidden */
    _onActiveChange: (args: any) => void;
    protected _render(s: MbscCalendarOptions, state: MbscCalendarState): void;
    protected _shouldValidate(s: MbscCalendarOptions, prevS: MbscCalendarOptions): boolean;
    protected _validate(): void;
    protected _copy(value: any[]): {
        [x: number]: any;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): any;
        push(...items: any[]): number;
        concat(...items: ConcatArray<any>[]): any[];
        concat(...items: any[]): any[];
        join(separator?: string): string;
        reverse(): any[];
        shift(): any;
        slice(start?: number, end?: number): any[];
        sort(compareFn?: (a: any, b: any) => number): any[];
        splice(start: number, deleteCount?: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        unshift(...items: any[]): number;
        indexOf(searchElement: any, fromIndex?: number): number;
        lastIndexOf(searchElement: any, fromIndex?: number): number;
        every(callbackfn: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        some(callbackfn: (value: any, index: number, array: any[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any): U[];
        filter<S extends any>(callbackfn: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[];
        filter(callbackfn: (value: any, index: number, array: any[]) => unknown, thisArg?: any): any[];
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduce<U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any;
        reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any;
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) => U, initialValue: U): U;
        find<S extends any>(predicate: (this: void, value: any, index: number, obj: any[]) => value is S, thisArg?: any): S;
        find(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): any;
        /** @hidden */
        findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number;
        fill(value: any, start?: number, end?: number): any[];
        copyWithin(target: number, start: number, end?: number): any[];
        [Symbol.iterator](): IterableIterator<any>;
        entries(): IterableIterator<[number, any]>;
        keys(): IterableIterator<number>; /** @hidden */
        values(): IterableIterator<any>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        includes(searchElement: any, fromIndex?: number): boolean;
    };
    protected _format(value: any): string;
    protected _parse: (value: any) => any;
    protected _get(value: any): any[] | Date;
}
