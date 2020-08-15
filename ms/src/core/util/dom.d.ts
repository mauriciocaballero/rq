/**
 * Generic DOM functions.
 */
export declare const doc: Document;
export declare const win: Window;
export declare const raf: any;
export declare const rafc: any;
export declare const hasAnimation: boolean;
export declare const hasGhostClick: boolean;
export declare const jsPrefix: string;
export declare const cssPrefix: string;
export declare const has3d: any;
/**
 * @hidden
 * @param el
 * @param event
 * @param handler
 */
export declare function listen(el: EventTarget | null | undefined, event: string, handler: EventListener, opt?: any): void;
/**
 * @hidden
 * @param el
 * @param event
 * @param handler
 */
export declare function unlisten(el: EventTarget | null | undefined, event: string, handler: EventListener, opt?: any): void;
/**
 * @hidden
 * @param el
 */
export declare function getDocument(el: HTMLElement): Document | undefined;
export declare function getDimension(el: HTMLElement, property: string): number;
export declare function getScrollLeft(el: any): any;
export declare function getScrollTop(el: any): any;
export declare function setScrollLeft(el: any, val: number): void;
export declare function setScrollTop(el: any, val: number): void;
/**
 * @hidden
 * @param el
 */
export declare function getWindow(el: HTMLElement): Window | undefined;
/**
 * @hidden
 * @param el
 * @param vertical
 */
export declare function getPosition(el: HTMLElement, vertical?: boolean): number;
/**
 * Calculates the text color to be used with a given color (black or white)
 * @hidden
 * @param color
 */
export declare function getTextColor(color: string): string;
/**
 * Scrolls a container to the given position
 * @hidden
 * @param elm Element to scroll
 * @param to Position to scroll to
 * @param noAnim If true, scroll is not animated
 * @param callback Callback when scroll position is reached
 */
export declare function smoothScroll(elm: HTMLElement, to: number, noAnim?: boolean, callback?: () => void): void;
/**
 * Convert html text to plain text
 * @hidden
 * @param htmlString
 */
export declare function htmlToText(htmlString: string): string;
/**
 * Gets the offset of a HTML element relative to the window
 * @param el The HTML element
 */
export declare function getOffset(el: HTMLElement): {
    left: number;
    top: number;
};
/**
 * Triggers an event on a HTML element
 * NOTE: React messes with the eventlisteners, so triggering an event with
 * this method will not be picked up with a react way listener (ex. `<input onChange={handler} />`),
 * instead will require to be listened manually (ex. listen/unlisten util functions)
 * @param elm The target HTML element, the event will triggered on
 * @param name The name of the event
 * @param data Additional event data
 */
export declare function trigger(elm: HTMLElement, name: string, data?: any): void;
