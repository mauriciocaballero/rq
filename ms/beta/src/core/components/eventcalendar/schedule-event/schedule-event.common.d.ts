import { MbscScheduleEventOptions, ScheduleEventBase } from './schedule-event';
/**
 * The ScheduleEvent component.
 *
 * Usage:
 *
 * ```
 * <ScheduleEvent  />
 * ```
 */
export declare class ScheduleEvent extends ScheduleEventBase {
    protected _template(s: MbscScheduleEventOptions): any;
    protected _updated(): void;
}
