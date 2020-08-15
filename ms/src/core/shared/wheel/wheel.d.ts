import { BaseComponent, IBaseProps } from '../../base';
import { DisplayType } from '../../components/popup/popup';
/** @hidden */
export interface IWheelProps extends IBaseProps {
    disabled?: any;
    display?: DisplayType;
    itemHeight: number;
    prevAnim: boolean;
    rows: number;
    scroll3d: boolean;
    selectedIndex: number;
    wheel: any;
    maxIndex: number;
    maxWheelWidth?: number | number[];
    minIndex: number;
    minWheelWidth?: number | number[];
    wheelWidth?: number | number[];
    onIndexChange(args: any): void;
}
/** @hidden */
export declare class WheelBase extends BaseComponent<IWheelProps, any> {
    _angle3d: number;
    _batchSize3d: number;
    _style: any;
    _innerStyle: any;
    _items: any[];
    _wheelStyle: any;
    private _shouldFocus;
    _onIndexChange: (args: any) => void;
    _onItemClick: (args: any) => void;
    _onKeyDown: (ev: any) => void;
    _getText(data: any): string;
    _isDisabled(data: any): any;
    protected _render(s: IWheelProps): void;
    protected _updated(): void;
}
