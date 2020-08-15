import { BaseComponent, IBaseProps } from '../../base';
/** @hidden */
export interface IWheelItemProps extends IBaseProps {
    angle3d: number;
    disabled: boolean;
    height: number;
    index: number;
    is3d: boolean;
    offset: number;
    rows: number;
    scroll3d: boolean;
    selected: boolean;
    text: string;
    update: any;
    onClick?(args: any): void;
}
export interface IWheelItemState {
    hasHover: boolean;
    hasFocus: boolean;
    isActive: boolean;
}
/** @hidden */
export declare class WheelItemBase extends BaseComponent<IWheelItemProps, IWheelItemState> {
    _cssClass: string;
    _style: object;
    _transform: any;
    private _unlisten;
    _onClick: () => void;
    protected _mounted(): void;
    protected _destroy(): void;
    protected _render(s: IWheelItemProps, state: IWheelItemState): void;
}
