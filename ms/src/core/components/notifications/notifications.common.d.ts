import './notifications.scss';
interface INotificationOptions {
    cssClass?: string;
    duration?: any;
    message?: string;
    display?: 'bottom' | 'center' | 'top';
    theme?: string;
    callback?: void;
}
export declare function toast(settings: INotificationOptions): any;
export {};
