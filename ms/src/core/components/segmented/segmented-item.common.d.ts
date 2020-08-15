import { MbscSegmentedOptions, SegmentedBase } from './segmented-item';
import './segmented.scss';
export declare class SegmentedItem extends SegmentedBase {
    checked: boolean;
    protected _template(s: MbscSegmentedOptions): import("../../../preact/lib/src").VNode<any>;
}
