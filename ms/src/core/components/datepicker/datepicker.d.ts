import { PickerBase } from '../../shared/picker/picker';
import { MbscCalendarOptions } from '../calendar/calendar';
import { MbscDatetimeOptions } from '../datetime/datetime';
export declare const modules: {
    [key: string]: any;
};
export interface MbscDatepickerOptions extends MbscCalendarOptions, MbscDatetimeOptions {
    controls?: Array<'calendar' | 'date' | 'time' | 'datetime'>;
    defaultValue?: any;
    modules?: any[];
    tabs?: boolean | 'auto';
    selectCounter?: boolean;
}
/** @hidden */
export interface MbscDatepickerState {
    activeTab?: string;
    isLarge?: boolean;
    isOpen?: boolean;
    pages?: number;
    value?: any;
    width?: number;
    widthType?: 'sm' | 'md';
}
/** @hidden */
export declare class DatepickerBase extends PickerBase<MbscDatepickerOptions, MbscDatepickerState> {
    /** @hidden */
    static defaults: MbscDatepickerOptions;
    protected static _name: string;
    value: any;
    _activeTab: string | undefined;
    _controls: any[];
    _renderTabs: boolean | undefined;
    _selectedDate: Date | undefined;
    _cssClass: string | undefined;
    protected _needsWidth: boolean;
    private _iso;
    private _hasDate;
    private _hasTime;
    private _valueFormat;
    _onResize: (ev: any) => any;
    _onCalendarChange: (ev: any) => void;
    _onDatetimeChange: (ev: any) => void;
    /** @hidden */
    _changeActiveTab: (ev: any) => void;
    protected _init(): void;
    protected _render(s: MbscDatepickerOptions, state: MbscDatepickerState): void;
    protected _setHeader(): void;
    protected _shouldValidate(s: MbscDatepickerOptions, prevS: MbscDatepickerOptions): boolean;
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
        findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number;
        fill(value: any, start?: number, end?: number): any[];
        copyWithin(target: number, start: number, end?: number): any[];
        [Symbol.iterator](): IterableIterator<any>;
        entries(): IterableIterator<[number, any]>;
        keys(): IterableIterator<number>;
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
    protected _proxy: (args: any) => void;
    protected _parse: (value: any) => any;
    protected _get(value: any): any;
}
