import { createContext, Fragment, h, render } from './lib/src/index';
import { PureComponent } from './pure';
export { createContext, Fragment, render, PureComponent };
export declare const createElement: typeof h;
export declare const isPreact = true;
export declare function findDOMNode(component: any): any;
export declare function unmountComponentAtNode(container: any): boolean;
export interface IRenderOptions {
    /**
     * Set this to true, when the component has real DOM children which should be added when the virtual dom is rendered
     */
    hasChildren?: boolean;
    /**
     *
     */
    hasValue?: boolean;
    /**
     * Css class of the element where the real DOM child elements should be rendered
     */
    parentClass?: string;
    /**
     * List of attributes which should be read from the native element and pass as options to the component
     */
    readAttrs?: string[];
    /**
     * List of props which should be read from the native element and pass as options to the component
     */
    readProps?: string[];
    /**
     * Set this to true to render the component to the parent of the element and not in the element itself
     * (like in the case of form inputs)
     */
    renderToParent?: boolean;
    /**
     * List of slots where additional DOM elements can be rendered, besides the children
     */
    slots?: {
        [key: string]: string;
    };
    /**
     * Set this to true to use the element's children instead of the parent's children, when renderToParent is true
     */
    useOwnChildren?: boolean;
    /**
     * Hook which runs right before calling the render function.
     * Useful to run component specific logic, like DOM transformations, etc.
     */
    before?: (elm: HTMLElement, opt: any, children: any[]) => void;
}
export declare function initComponents(target: any, selector: string, Component: any, renderOptions?: IRenderOptions, options?: any): void;
/**
 * Creates and renders a Preact component for/inside the specified element.
 * @param Component The component which needs to be created.
 * @param elm The element for which the component is needed.
 * @param options Init options for the component.
 * @param renderOptions Render options for the component.
 */
export declare function createComponent(Component: any, elm: HTMLElement, options?: any, renderOptions?: IRenderOptions, formControl?: boolean): any;
export declare function getInst<T>(elm: HTMLElement, formControl?: boolean): T;
export declare function registerComponent(Component: any): void;
/**
 * Will auto-init the registered components inside the provided element.
 * @param elm The element in which the components should be enhanced.
 */
export declare function enhance(elm: any, options?: any): void;
