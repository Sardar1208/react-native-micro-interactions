import Animated from "react-native-reanimated";
import { useAnimation } from "../hooks/useAnimation";
import type {
  AnimationOptions,
  AnimationTrigger,
  AnimationType,
} from "../types/animations";
import { TouchableOpacity } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import AnimatedChild from "./AnimatedChild";
import { useRunAnimation } from "../hooks/useRunAnimation";
import {
  handleInvalidInput,
  isComponentTouchable,
} from "../utils/utilityFunctions";

export interface AnimatedWrapperProps {
  children: React.ReactElement<any>;
  animationType: AnimationType;
  animationTrigger?: AnimationTrigger;
  animationOptions?: AnimationOptions;
  isGroup?: boolean;
}

export interface AnimatedWrapperRef {
  runAnimation: () => void;
}

const AnimatedWrapper = forwardRef<AnimatedWrapperRef, AnimatedWrapperProps>(
  (
    {
      children,
      animationTrigger,
      animationType,
      animationOptions,
      isGroup = false,
    },
    ref
  ) => {
    const childElements = React.Children.toArray(children);

    // Validate the children
    handleInvalidInput(childElements, isGroup);

    const { animatedStyle, runIndividualAnimation } = useAnimation(
      animationType,
      animationOptions
    );

    const { addAnimation, runAnimation, runCurrentAnimation } = useRunAnimation(
      runIndividualAnimation,
      isGroup
    );

    // Expose runAnimation to the parent component
    useImperativeHandle(ref, () => ({
      runAnimation,
    }));

    useEffect(() => {
      if (animationTrigger === "init") {
        runCurrentAnimation();
      }
    }, [children]);

    // render animated grandchildren in case of group animations
    const mapGrandChildren = () =>
      childElements.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <AnimatedChild
              key={child.key || index}
              animationOptions={animationOptions}
              animationType={animationType}
              addAnimation={addAnimation}
            >
              {child}
            </AnimatedChild>
          );
        }
        return child;
      });

    // handle non group animations
    if (isGroup === false) {
      const AnimatedComponent = useMemo(() => {
        return Animated.createAnimatedComponent(
          children.type as React.ComponentType<any>
        );
      }, [children.type]);

      const { style, onPress, onLongPress, ...restProps } = children.props;
      const combinedStyle = [animatedStyle, style];

      // If the child provided is already a touchable kind, we dont need to wrap with additional touchable opacity
      if (isComponentTouchable(children)) {
        if (isGroup === false) {
          return (
            <AnimatedComponent
              {...restProps}
              style={combinedStyle}
              onPress={(...args: any[]) => {
                if (animationTrigger === "press") {
                  runCurrentAnimation();
                }
                onPress?.(...args);
              }}
            >
              {children.props.children}
            </AnimatedComponent>
          );
        } else {
          return mapGrandChildren();
        }
      }

      return (
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={
            animationTrigger === "press" ? runCurrentAnimation : undefined
          }
          onLongPress={
            animationTrigger === "long_press" ? runCurrentAnimation : undefined
          }
        >
          <AnimatedComponent {...restProps} style={combinedStyle}>
            {children.props.children}
          </AnimatedComponent>
        </TouchableOpacity>
      );
    } else {
      // handle group animations
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={
            animationTrigger === "press" ? runCurrentAnimation : undefined
          }
          onLongPress={
            animationTrigger === "long_press" ? runCurrentAnimation : undefined
          }
        >
          {mapGrandChildren()}
        </TouchableOpacity>
      );
    }
  }
);

export default AnimatedWrapper;
