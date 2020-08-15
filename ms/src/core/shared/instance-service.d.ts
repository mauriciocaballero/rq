import { Observable } from '../util/observable';
export declare class InstanceServiceBase {
    onInstanceReady: Observable<unknown>;
    onComponentChange: Observable<unknown>;
    protected inst: any;
    instance: any;
}
