import { createRef } from "react";

export const navigationRef = createRef();

export function onNavigateHandle(routeName, params, action = 'navigate') {
    return function() {
        if(action === 'popToTop') {
            navigationRef.current.navigation[action]();
            return;
        }
        if(!params) navigationRef.current.navigation[action](routeName);
        else navigationRef.current.navigation[action](routeName, params);
    }
}