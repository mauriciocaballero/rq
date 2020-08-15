import { BaseComponent, IBaseProps } from '../../base';
export interface MbscListItemOptions extends IBaseProps {
    ripple?: boolean;
    onClick?(args: any): void;
}
/** @hidden */
export interface MbscListItemState {
    hasFocus?: boolean;
    hasHover?: boolean;
    isActive?: boolean;
}
/** @hidden */
export declare class ListItemBase extends BaseComponent<MbscListItemOptions, MbscListItemState> {
    static defaults: MbscListItemOptions;
    protected static _name: string;
    _cssClass: string;
    private _unlisten;
    protected _mounted(): void;
    protected _render(s: MbscListItemOptions, state: MbscListItemState): void;
    protected _destroy(): void;
}
