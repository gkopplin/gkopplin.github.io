export const RECEIVE_TAB = "RECEIVE_TAB";
export const RECEIVE_TABS = "RECEIVE_TABS";


export const receiveTabs = (tabs) => {
    return {
        type: RECEIVE_TABS,
        tabs
    };
};

export const receiveTab = (tabNum, tabVal) => {
    return {
        type: receiveTab,
        tabNum,
        tabVal
    };
};

