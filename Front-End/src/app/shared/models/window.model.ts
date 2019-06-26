
export interface Window {
    id: number;

    appName: string;
    title: string;
    icon: string;
    component: string;

    allowResize?: boolean;
    allowMaximize?: boolean;
    allowMinimize?: boolean;
    allowClose?: boolean;

    isFocused?: boolean;
    isHidden?: boolean;
    isMax: boolean;

    height?: number;
    width?: number;
    posX?: number;
    posY?: number;
    posZ: number;   // z-index
}

/**
 *  <#> types of operations :
 *  [insert(add), update(focus, maximize, minimize), delete(close)]
 */
export interface Operation {
    windowId: number ;
    operation: string ;
    data?: Window ;
}
