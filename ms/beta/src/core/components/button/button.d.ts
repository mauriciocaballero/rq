import { BaseComponent, IBaseProps } from '../../base';
export interface MbscButtonOptions extends IBaseProps {
    ariaLabel?: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    disabled?: boolean;
    endIcon?: string;
    endIconSrc?: string;
    endIconSvg?: string;
    icon?: string;
    iconSrc?: string;
    iconSvg?: string;
    onClick?: any;
    ripple?: boolean;
    startIcon?: string;
    startIconSrc?: string;
    startIconSvg?: string;
    tag?: 'button' | 'span' | 'a';
    variant?: 'standard' | 'flat' | 'outline';
}
/** @hidden */
export interface MbscButtonState {
    hasFocus?: boolean;
    hasHover?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class ButtonBase extends BaseComponent<MbscButtonOptions, MbscButtonState> {
    static defaults: MbscButtonOptions;
    protected static _name: string;
    _cssClass: string;
    _endIconClass: string;
    _hasStartIcon: boolean;
    _hasEndIcon: boolean;
    _iconClass: string;
    _isIconOnly: boolean;
    _startIconClass: string;
    _tabIndex: number | undefined;
    private _unlisten;
    protected _mounted(): void;
    protected _render(s: MbscButtonOptions, state: MbscButtonState): void;
    protected _destroy(): void;
}
