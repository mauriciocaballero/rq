import { BaseComponent, IBaseProps } from '../../base';
import { DisplayType, MbscPopupButton, PopupBase } from '../../components/popup/popup';
/**
 * Options for all picker components
 */
export interface IPickerProps extends IBaseProps {
    defaultValue?: any;
    disabled?: boolean;
    element?: any;
    initialValue?: any;
    inputComponent?: any;
    inputProps?: any;
    invalid?: any[];
    showInput?: boolean;
    showOnFocus?: boolean;
    showOnClick?: boolean;
    valid?: any[];
    value?: any;
    endIcon?: string;
    endIconSrc?: string;
    endIconSvg?: string;
    error?: boolean;
    errorMessage?: string;
    inputStyle?: 'underline' | 'outline' | 'box';
    label?: string;
    labelStyle?: 'floating' | 'stacked' | 'inline';
    name?: string;
    placeholder?: string;
    startIcon?: string;
    startIconSrc?: string;
    startIconSvg?: string;
    anchor?: HTMLElement;
    animation?: 'pop' | 'slide-down' | 'slide-up';
    buttons?: Array<MbscPopupButton | 'ok' | 'close' | 'set' | 'cancel'>;
    closeOnEsc?: boolean;
    closeOnOverlayTap?: boolean;
    display?: DisplayType;
    focusOnClose?: boolean;
    focusTrap?: boolean;
    fullScreen?: boolean;
    headerText?: string;
    height?: string | number;
    isOpen?: boolean;
    maxHeight?: string | number;
    maxWidth?: string | number;
    showArrow?: boolean;
    showOverlay?: boolean;
    width?: string | number;
    cancelText?: string;
    clearText?: string;
    closeText?: string;
    okText?: string;
    setText?: string;
    onCancel?(args: any, inst: any): void;
    onChange?(args: any, inst: any): void;
    onClose?(args: any, inst: any): void;
    onOpen?(args: any, inst: any): void;
}
export interface IPickerState {
    isOpen?: boolean;
    value?: any;
}
/** @hidden */
export declare class PickerBase<PropType extends IPickerProps, StateType extends IPickerState> extends BaseComponent<PropType, StateType> {
    value: any;
    /** @hidden */
    _anchor: any;
    /** @hidden */
    _buttons: Array<MbscPopupButton | 'ok' | 'close' | 'set' | 'cancel'>;
    /** @hidden */
    _hasValue: boolean;
    /** @hidden */
    _headerText: string | undefined;
    /** @hidden */
    _isOpen: boolean;
    /** @hidden */
    _live: boolean;
    /** @hidden */
    _showInput: boolean;
    /** @hidden */
    _tempValueRep: any;
    /** @hidden */
    _tempValueText: string;
    /** @hidden */
    _value: any;
    /** @hidden */
    _valueRep: any;
    /** @hidden */
    _valueText: string;
    /** @hidden */
    _wrapper: HTMLElement | null;
    protected _inst: PickerBase<PropType, StateType>;
    protected _isMbsc: boolean;
    protected _popup: PopupBase | null;
    private _input;
    private _observer;
    private _preventParse;
    private _preventShow;
    private _readOnly;
    private _shouldInitInput;
    private _unlisten;
    private _valueChange;
    private _win;
    open(): void;
    close(): void;
    set(): void;
    position(): void;
    isVisible(): boolean;
    getVal(): any;
    setVal(value: any): void;
    _onInputClick: () => void;
    _onInputFocus: () => void;
    _onInputMouseDown: (ev: any) => void;
    _onInputKey: (ev: any) => void;
    _onResize: (args: any) => void;
    _onWrapperResize: () => void;
    _onPopupClose: () => void;
    _onPopupClosed: (args: any) => void;
    _onPopupKey: (args: any) => void;
    _onPopupOpen: (args: any) => void;
    _onWinFocus: () => void;
    _onButtonClick: (args: any) => void;
    _setInput: (inp: any) => void;
    _setPopup: (popup: PopupBase) => void;
    _setWrapper: (wrapper: HTMLElement) => void;
    protected _render(s: IPickerProps, state: IPickerState): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _setHeader(): void;
    protected _shouldValidate(s: IPickerProps, prevS: IPickerProps): boolean;
    /**
     * Returns a copy of the value representation.
     * Is used to copy the temporary value to the final value and vica versa.
     * @param value The value to copy.
     */
    protected _copy(value: any): any;
    /**
     * Formats the value representation into a string to display the selection.
     * @param value The value to format.
     */
    protected _format(value: any): string;
    /**
     * Transforms the value representation into the actual value.
     * E.g. in case of date scroller the value is represented as an array like [5, 28, 2020],
     * this function will transform it into a date object.
     * @param value The value to transform.
     */
    protected _get(value: any): any;
    /**
     * Parses a string or actual value into the value representation.
     * E.g. in case of the date scroller the '05/28/2020' string should be parsed into [5, 28, 2020].
     * @param valueText The value to parse.
     */
    protected _parse(valueText: any): any;
    protected _validate(): void;
    protected _onClosed(): void;
    protected _onOpen(): void;
    protected _onParse(): void;
    private _change;
    private _initEl;
    private _resetEl;
}
