import { Base } from '../preact/base';
export declare const version = "5.0.0-beta3";
/**
 * @hidden
 * Preact with typescript complains about these props missing,
 * so adding it here
 */
export interface IBaseProps {
    context?: any;
    cssClass?: string;
    responsive?: {
        [key: string]: any;
    };
    rtl?: boolean;
    theme?: string;
    themeVariant?: 'light' | 'dark' | 'auto';
    touchUi?: boolean;
    locale?: string | {};
    /** @hidden */
    children?: any;
    /** @hidden */
    class?: string;
    /** @hidden */
    className?: string;
    /** @hidden */
    dangerouslySetInnerHTML?: any;
    /** @hidden */
    default?: any;
    /** @hidden */
    hasChildren?: boolean;
    /** @hidden */
    jsx?: any;
    /** @hidden */
    key?: any;
    /** @hidden */
    path?: any;
    /** @hidden */
    ref?: any;
    /** @hidden */
    style?: any;
    onDestroy?(args: any, inst: BaseComponent<IBaseProps, {}>): void;
    onInit?(args: any, inst: BaseComponent<IBaseProps, {}>): void;
}
/** @hidden */
export declare class BaseComponent<PropType, StateType> extends Base<PropType, StateType> {
    /** @hidden */
    static defaults: any;
    protected static _name: string;
    readonly nativeElement: HTMLElement;
    /** @hidden */
    s: PropType;
    /** @hidden */
    state: any;
    /** @hidden */
    _className: string;
    /** @hidden */
    _hb: string;
    /**
     * Used to identify if it's a mobiscroll component
     * @hidden
     */
    _mbsc: boolean;
    /** @hidden */
    _rtl: string;
    /** @hidden */
    _theme: string;
    /** @hidden */
    _v: any;
    /**
     * Needed for preact for dynamic updates, because props is immutable.
     * Merge this into the computed settings as well.
     */
    protected _newProps: any;
    protected _prevS: any;
    protected _respProps: PropType;
    protected _zone: any;
    protected _optChange: number;
    protected _uid: number;
    destroy(): void;
    _hook(name: string, args: any): any;
    protected _destroy(): void;
    protected _render(s: PropType, state: StateType): void;
    protected _willUpdate(): void;
    protected _init(): void;
    private _resp;
    private _merge;
}
