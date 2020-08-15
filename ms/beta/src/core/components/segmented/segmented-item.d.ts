import { BaseComponent } from '../../base';
import { MbscButtonOptions } from '../button/button';
import { MbscSegmentedGroupOptions } from './segmented-group';
export interface MbscSegmentedOptions extends MbscButtonOptions {
    checked?: boolean;
    defaultChecked?: boolean;
    name?: string;
    select?: 'single' | 'multiple';
    value?: string;
    onChange?: any;
}
/** @hidden */
export interface MbscSegmentedState {
    disabled?: boolean;
    selected?: boolean;
}
/** @hidden */
export declare class SegmentedBase extends BaseComponent<MbscSegmentedOptions, MbscSegmentedState> {
    static defaults: MbscSegmentedOptions;
    protected static _name: string;
    _checked: boolean;
    _color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
    _cssClass?: string;
    _disabled: boolean;
    _isMultiple: boolean;
    _name: string;
    _id: string;
    _value: any;
    _onGroupChange: (ev: any, value: any) => void;
    private _unsubscribe;
    _onChange: (ev: any) => void;
    _onValueChange: (value: any) => void;
    protected _change(checked: boolean): void;
    protected _toggle(checked: boolean): void;
    protected _groupOptions({ color, disabled, name, onChange, select, value }: MbscSegmentedGroupOptions): void;
    protected _updated(): void;
    protected _destroy(): void;
}
