import { BaseComponent, IBaseProps } from '../../base';
/** @hidden */
export interface IScrollviewBaseProps extends IBaseProps {
    axis?: 'X' | 'Y';
    batchSize?: number;
    batchSize3d?: number;
    changeOnEnd?: boolean;
    data?: any;
    easing?: string;
    innerClass?: string;
    innerStyles?: any;
    items?: any;
    itemRenderer?: any;
    itemSize?: number;
    itemNr?: number;
    margin?: boolean;
    mousewheel?: boolean;
    maxIndex?: number;
    minIndex?: number;
    offset?: number;
    prevAnim?: boolean;
    prevDef?: boolean;
    scroll3d?: boolean;
    scrollLock?: boolean;
    selectedIndex?: number;
    snap?: boolean;
    stopProp?: boolean;
    styles?: object;
    thresholdX?: number;
    thresholdY?: number;
    time?: number;
    onAnimationEnd?(args: any): void;
    onGestureEnd?(args: any): void;
    onGestureStart?(args: any): void;
    onIndexChange?(args: any): void;
}
/** @hidden */
export interface IScrollviewBaseState {
    index?: number;
}
/** @hidden */
export declare class ScrollviewBase extends BaseComponent<IScrollviewBaseProps, {}> {
    static defaults: IScrollviewBaseProps;
    visibleItems: any[];
    visible3dItems: any[];
    _cssClass: string;
    _innerEl: HTMLElement;
    _offset: number;
    _scrollEl: HTMLElement;
    _scrollEl3d: HTMLElement;
    private _currIndex;
    private _currPos;
    private _currX;
    private _currY;
    private _delta;
    private _doc;
    private _endPos;
    private _hasScrolled;
    private _isAnimating;
    private _isScrolling;
    private _isVertical;
    private _lastRaf;
    private _max;
    private _maxSnapScroll;
    private _margin;
    private _min;
    private _prevIndex;
    private _raf;
    private _round;
    private _rtlNr;
    private _scrollSnap;
    private _started;
    private _startPos;
    private _timestamp;
    private _threshold;
    private _velocityX;
    private _velocityY;
    private _unlisten;
    private _scrollEnd;
    protected _render(s: IScrollviewBaseProps, state: IScrollviewBaseState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _onStart: (args: any) => void;
    protected _onMove: (args: any) => void;
    protected _onEnd: () => void;
    protected _onClick: (ev: MouseEvent) => void;
    protected _onScroll: (ev: any) => void;
    protected _onMouseWheel: (ev: any) => void;
    /**
     * Maintains the current position during animation
     */
    private _anim;
    private _infinite;
    private _scroll;
    private _move;
}
