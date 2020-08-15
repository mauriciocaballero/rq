export declare const UNDEFINED: undefined;
export declare const ARRAY3: number[];
export declare const ARRAY4: number[];
export declare const ARRAY7: number[];
export declare const ARRAY24: number[];
/**
 * Constrains the value to be between min and max.
 * @hidden
 * @param val   Tha value to constrain.
 * @param min   Min value.
 * @param max   Max value.
 * @return      The constrained value.
 */
export declare function constrain(val: number, min: number, max: number): number;
/** @hidden */
export declare function isArray(obj: any): boolean;
/** @hidden */
export declare function isNumeric(a: any): boolean;
/** @hidden */
export declare function isString(s: any): boolean;
/** @hidden */
export declare function emptyOrTrue(value: any): boolean;
/** @hidden */
export declare function getArray(nr: number): number[];
/** @hidden */
export declare function addPixel(value: any): string;
/** @hidden */
export declare function noop(): void;
/** @hidden */
export declare function pad(num: number, size?: number): string;
/** @hidden */
export declare function round(nr: number): number;
/** @hidden */
export declare function step(value: number, st: number): number;
/** @hidden */
export declare function floor(nr: number): number;
/** @hidden */
export declare function hasChanged(props: any, prevProps: any, names: string[]): boolean;
/** @hidden */
export declare function throttle(fn: any, threshhold?: number): (...args: any[]) => void;
/** @hidden */
export declare function debounce(fn: any, threshhold?: number): (...args: any[]) => void;
