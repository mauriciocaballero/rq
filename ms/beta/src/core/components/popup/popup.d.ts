import { BaseComponent, IBaseProps } from '../../base';
export declare type DisplayType = 'center' | 'bottom' | 'top' | 'anchored' | 'inline' | 'bubble';
export interface MbscPopupButton {
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    cssClass?: string;
    icon?: string;
    name?: string;
    text?: string;
    variant?: 'standard' | 'flat' | 'outline';
    handler?: (event: any) => void;
}
export interface MbscPopupOptions extends IBaseProps {
    anchor?: HTMLElement;
    animation?: 'pop' | 'slide-down' | 'slide-up';
    buttons?: Array<MbscPopupButton | string>;
    buttonVariant?: 'standard' | 'flat' | 'outline';
    closeOnEsc?: boolean;
    closeOnOverlayTap?: boolean;
    closeOnScroll?: boolean;
    contentPadding?: boolean;
    display?: DisplayType;
    focusElm?: any;
    focusOnClose?: boolean;
    focusOnOpen?: boolean;
    focusTrap?: boolean;
    fullScreen?: boolean;
    headerText?: string;
    height?: string | number;
    isOpen?: boolean;
    maxHeight?: string | number;
    maxWidth?: string | number;
    scrollLock?: boolean;
    showArrow?: boolean;
    showOverlay?: boolean;
    width?: string | number;
    cancelText?: string;
    closeText?: string;
    okText?: string;
    setText?: string;
    onButtonClick?(args: any, inst: any): void;
    onClose?(args: any, inst: any): void;
    onClosed?(args: any, inst: any): void;
    onKeyDown?(args: any, inst: any): void;
    onOpen?(args: any, inst: any): void;
    onPosition?(args: any, inst: any): void;
}
/** @hidden */
export interface MbscPopupState {
    arrowPos?: {
        left?: string;
        top?: string;
    };
    bubblePos?: 'top' | 'bottom' | 'left' | 'right';
    isOpen?: boolean;
    isReady?: boolean;
    /**
     * The height of the popup
     */
    modalHeight?: number;
    /**
     * The width of the popup
     */
    modalWidth?: number;
    /**
     * Top position of the dialog
     */
    modalTop?: string;
    /**
     * Left position of the dialog
     */
    modalLeft?: string;
    /**
     * ViewPort width
     */
    width?: number;
    /**
     * ViewPort height
     */
    height?: number;
}
/** @hidden */
export declare function processButtons(inst: any, s: MbscPopupOptions): MbscPopupButton[] | undefined;
/**
 * @hidden
 */
export declare class PopupBase extends BaseComponent<MbscPopupOptions, MbscPopupState> {
    /** @hidden */
    static defaults: MbscPopupOptions;
    _active: HTMLElement;
    _animation: 'pop' | 'slide-down' | 'slide-up';
    _buttons: MbscPopupButton[] | undefined;
    _ctx: any;
    _content: HTMLElement;
    _hasContext: boolean;
    _headerText: any;
    _isClosing: boolean;
    _isModal: boolean;
    _isOpening: boolean;
    _isOpen: boolean;
    _isVisible: boolean;
    _limitator: HTMLElement;
    _limits: any;
    _popup: HTMLElement;
    _round: boolean;
    _short: boolean;
    _style: any;
    _wrapper: HTMLElement;
    protected _justClosed: boolean;
    protected _justOpened: boolean;
    private _doc;
    private _hasWidth;
    private _lastFocus;
    private _lock;
    private _needsLock;
    private _observer;
    private _preventClose;
    private _prevFocus;
    private _prevModal;
    private _scrollCont;
    private _shouldPosition;
    private _win;
    private _target;
    _onOverlayClick: () => void;
    _onDocClick: () => void;
    _onMouseDown: (ev: any) => void;
    _onMouseUp: (ev: any) => void;
    _onPopupClick: () => void;
    _onAnimationEnd: (ev: any) => void;
    _onButtonClick: (ev: any, button: MbscPopupButton) => void;
    _onFocus: (ev: any) => void;
    _onKeyDown: (ev: any) => void;
    _onContentScroll: (ev: any) => void;
    _onScroll: (ev: any) => void;
    _onWndKeyDown: (ev: any) => void;
    _onResize: () => void;
    /**
     * Open
     */
    open(): void;
    /**
     * Close
     */
    close(): void;
    /**
     * Is open?
     */
    isVisible(): boolean;
    position(): void;
    protected _render(s: MbscPopupOptions, state: MbscPopupState): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _onOpen(): void;
    protected _onClose(): void;
    protected _onOpened(): void;
    protected _onClosed(): void;
    private _unlisten;
}
