import { IBaseProps } from '../base';
import { MbscCalendarSystem } from '../commons';
export declare const DAY_OF_MONTH: RegExp;
export declare const DAY_OF_WEEK: RegExp;
export declare const ONE_DAY: number;
export declare type DateType = string | Date;
/** @hidden */
export interface IDatetimeProps extends IBaseProps {
    amText?: string;
    calendarSystem?: MbscCalendarSystem;
    dateFormat?: string;
    dateFormatLong?: string;
    dayNames?: string[];
    dayNamesMin?: string[];
    dayNamesShort?: string[];
    daySuffix?: string;
    defaultValue?: any;
    firstDay?: number;
    fromText?: string;
    invalid?: any[];
    max?: DateType;
    min?: DateType;
    moment?: any;
    monthNames?: string[];
    monthNamesShort?: string[];
    monthSuffix?: string;
    pmText?: string;
    returnFormat?: 'jsdate' | 'iso8601' | 'locale' | 'moment';
    shortYearCutoff?: string | number;
    timeFormat?: string;
    todayText?: string;
    toText?: string;
    yearSuffix?: string;
    valid?: any[];
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    getDay?: (d: Date) => number;
    getMaxDayOfMonth?: (y: number, m: number) => number;
    getMonth?: (d: Date) => number;
    getWeekNumber?: (d: Date) => number;
    getYear?: (d: Date) => number;
}
/** @hidden */
export declare const dateTimeLocale: IDatetimeProps;
export declare const ISO_8601_FULL: RegExp;
export declare const ISO_8601_TIME: RegExp;
/**
 * Returns the minutes of a date, processing only the hours and minutes of the date object
 * @hidden
 * @param d date
 */
export declare function getDateHMAsMinutes(d: Date): number;
/**
 * Checks if two events are overlapping each other
 * @hidden
 * @param aStart start date of the first event
 * @param aEnd end date of the first event
 * @param bStart start date of the second event
 * @param bEnd end date of the first event
 * @returns Difference in days
 */
export declare function checkDateRangeOverlap(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean;
/** @hidden */
export declare function getDateStr(d: Date): string;
/** @hidden */
export declare function getDateOnly(d: Date): Date;
/**
 * Returns the difference in days for two dates
 * @hidden
 * @param d1 First date
 * @param d2 Second date
 * @returns Difference in days
 */
export declare function getDayDiff(d1: Date, d2: Date): number;
/**
 * Returns the date of the first day of the week for a given date
 * @hidden
 */
export declare function getFirstDayOfWeek(d: Date, s: any, w?: number): Date;
/**
 * Checks if two dates are on the same date
 * @hidden
 * @param d1 First date
 * @param d2 Second date
 * @returns True or false
 */
export declare function isSameDay(d1: Date, d2: Date): boolean;
/** @hidden */
export declare function adjustedDate(y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number): Date;
/** @hidden */
export declare function makeDate(d: any, format?: any, s?: any, parts?: any): any;
/** @hidden */
export declare function returnDate(d: Date, s: IDatetimeProps, displayFormat: string, isoParts: any): any;
/**
 * Format a date into a string value with a specified format
 * @param {string} format Output format
 * @param {Date} date  Date to format
 * @param {IDatetimeProps} options Locale options
 * @returns {string} The formatted date string
 */
export declare function formatDate(format: string, date: Date, options: IDatetimeProps): string;
/**
 * Extract a date from a string value with a specified format.
 * @param {string} format Input format.
 * @param {string} value String to parse.
 * @param {IDatetimeProps} options Locale options
 * @return {Date} Returns the extracted date or defaults to now if no format or no value is given
 */
export declare function parseDate(format: string, value: string, options: IDatetimeProps): Date;
