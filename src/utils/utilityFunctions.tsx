import React, { isValidElement } from "react";

const touchableTypes = [
  require("react-native").TouchableOpacity,
  require("react-native").TouchableWithoutFeedback,
  require("react-native").TouchableHighlight,
  require("react-native").Pressable,
];

const isComponentTouchable = (component: React.ReactElement): boolean => {
  if (!isValidElement(component)) return false;
  return touchableTypes.some(
    (TouchableType) => component.type === TouchableType
  );
};

const handleInvalidInput = (childElements: any, isGroup: boolean) => {
  if (childElements.length > 1 && isGroup === false) {
    throw new Error(
      "AnimatedWrapper expects only one child. Please set isGroup={true} if you wish to animate a group of components"
    );
  }

  childElements.forEach((child, idx) => {
    if (!React.isValidElement(child)) {
      throw new Error(
        `AnimatedWrapper only accepts valid React elements as children. Invalid child at index ${idx}.`
      );
    }
  });
};

export { isComponentTouchable, handleInvalidInput };
