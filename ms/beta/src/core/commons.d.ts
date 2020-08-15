import { Observable } from './util/observable';
export interface MbscCalendarSystem {
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    getDay?: (d: Date) => number;
    getMaxDayOfMonth?: (y: number, m: number) => number;
    getMonth?: (d: Date) => number;
    getWeekNumber?: (d: Date) => number;
    getYear?: (d: Date) => number;
}
export interface MbscOptions {
    calendarSystem?: MbscCalendarSystem;
    locale?: any;
    rtl?: boolean;
    theme?: string;
    themeVariant?: string;
}
export declare const options: MbscOptions;
export declare const util: any;
/** @hidden */
export declare const themes: {
    [key: string]: any;
};
/** @hidden */
export declare const autoDetect: {
    [key: string]: any;
};
/** @hidden */
export declare const globalChanges: Observable<MbscOptions>;
export declare function setOptions(local: Partial<MbscOptions>): void;
export declare function createCustomTheme(name: string, baseTheme: string): void;
