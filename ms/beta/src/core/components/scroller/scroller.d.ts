import { DisplayType } from '../../components/popup/popup';
import { IPickerProps, PickerBase } from '../../shared/picker/picker';
/**
 * Options for all scroller based components
 */
export interface IScrollerProps extends IPickerProps {
    circular?: boolean;
    /** @hidden */
    displayStyle?: DisplayType;
    /**
     * Height of the wheel items in pixels.
     */
    itemHeight?: number;
    minWheelWidth?: number | number[];
    maxWheelWidth?: number | number[];
    wheelWidth?: number | number[];
    /**
     * Number of visible rows on the wheel.
     */
    rows?: number;
    scroll3d?: boolean;
    showLabel?: boolean;
    validate?: (args: any) => {};
    shouldValidate?: (s: any, prevS: any) => boolean;
}
/**
 * Scroller options
 * @interface MbscScrollerOptions
 */
export interface MbscScrollerOptions extends IScrollerProps {
    wheels?: MbscScrollerWheel[][];
    formatValue?(values: any[]): string;
    getValue?(values: any[]): any;
    parseValue?(valueStr: string): any[];
}
/** @hidden */
export interface MbscScrollerState {
    isOpen?: boolean;
    value?: any;
}
export interface MbscScrollerWheel {
    label?: string;
    circular?: boolean;
    cssClass?: string;
    data?: Array<string | number | {
        display: string;
        value: any;
    }>;
    max?: number;
    min?: number;
    getItem?: (index: number) => any;
    getIndex?: (value: any) => number;
    _key?: number;
    _map?: any;
    _offset?: number;
}
/** @hidden */
export declare class ScrollerBase extends PickerBase<MbscScrollerOptions, MbscScrollerState> {
    /** @hidden */
    static defaults: MbscScrollerOptions;
    protected static _name: string;
    value: any;
    /** @hidden */
    _disabled: any[][];
    /** @hidden */
    _displayStyle: DisplayType;
    /** @hidden */
    _indexes: number[];
    /** @hidden */
    _lineStyle: any;
    /** @hidden */
    _overlayStyle: any;
    /** @hidden */
    _prevAnim: boolean;
    /** @hidden */
    _scroll3d: boolean;
    /** @hidden */
    _wheels: MbscScrollerWheel[][];
    /** @hidden */
    _wheelMap: {
        [index: number]: MbscScrollerWheel;
    };
    private _shouldSetIndex;
    _onWheelIndexChange: (args: any) => void;
    _getIndex(wheel: MbscScrollerWheel, value: any): any;
    _initWheels(): void;
    protected _render(s: MbscScrollerOptions, state: MbscScrollerState): void;
    protected _updated(): void;
    protected _shouldValidate(s: MbscScrollerOptions, prevS: MbscScrollerOptions): boolean;
    protected _copy(value: any[]): any[];
    protected _format(value: any[]): string;
    protected _get(value: any[]): any;
    protected _parse(valueStr: any): any[];
    protected _validate(index?: number, direction?: number): void;
    protected _onOpen(): void;
    protected _onParse(): void;
    private _initWheel;
    private _setIndexes;
}
