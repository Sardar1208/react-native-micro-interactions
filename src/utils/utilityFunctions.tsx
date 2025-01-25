import { isValidElement } from "react";

const touchableTypes = [
    require("react-native").TouchableOpacity,
    require("react-native").TouchableWithoutFeedback,
    require("react-native").TouchableHighlight,
    require("react-native").Pressable,
];

const isComponentTouchable = (component: React.ReactElement): boolean => {
    if (!isValidElement(component)) return false;
    return touchableTypes.some((TouchableType) => component.type === TouchableType);
};


export {
    isComponentTouchable,
}