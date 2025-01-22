import Animated from "react-native-reanimated";
import { useAnimation } from "../hooks/useAnimation";
import type { AnimationOptions, AnimationTrigger, AnimationType } from "../types/animations";
import { Text, TouchableOpacity } from "react-native";
import React, { forwardRef, isValidElement, useEffect, useImperativeHandle } from "react";
import AnimatedChild from "./AnimatedChild";

export interface AnimatedWrapperProps {
    children: React.ReactElement,
    animationType: AnimationType,
    animationTrigger?: AnimationTrigger,
    animationOptions?: AnimationOptions,
    isGroup?: boolean,
}

export interface AnimatedWrapperRef {
    runAnimation: () => void;
}

const AnimatedWrapper = forwardRef<AnimatedWrapperRef, AnimatedWrapperProps>(
    ({ children, animationTrigger, animationType, animationOptions, isGroup = false, }, ref) => {
        if (animationType === "text_slide_vertical" || animationType === "text_slide_horizontal" && children.type !== Text) {
            return children;
        }
        const { animatedStyle, runIndividualAnimation } = useAnimation(animationType, animationOptions);

        const AnimatedComponent = Animated.createAnimatedComponent(
            children.type as React.ComponentType<any>
        );

        let grandChildren;
        let groupAnimationSequence: (() => void)[] = [];

        function addAnimaton(fn: () => void) {
            groupAnimationSequence.push(fn);
        }

        function runAnimation() {
            if (isGroup) {
                groupAnimationSequence.forEach((fn, index) => {
                    setTimeout(() => {
                        fn();
                    }, 200 * index); // Delay each animation by 200ms
                });
            } else {
                runIndividualAnimation();
            }
        }

        // If group is enabled, create reanimated grandchildrens 
        if (isGroup == true) {
            const childElements = React.Children.toArray(children.props.children);
            grandChildren = childElements.map((child, index) => {
                if (React.isValidElement(child)) {
                    return <AnimatedChild
                        key={index}
                        animationOptions={animationOptions}
                        animationType={animationType}
                        addAnimation={addAnimaton}
                        children={child}
                    />
                }
                return child;
            });
        }

        const { style, onPress, onLongPress, ...restProps } = children.props;
        const combinedStyle = [animatedStyle, style];

        useImperativeHandle(ref, () => ({
            runAnimation, // Expose runAnimation to the parent component
        }));

        useEffect(() => {
            if (animationTrigger === "init") {
                runAnimation();
            }
        }, [children.props.children]);

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

        // If the child provided is already a touchable kind, we dont need to wrap with additional touchable opacity
        if (isComponentTouchable(children)) {
            return (
                <AnimatedComponent {...restProps} style={isGroup ? style : combinedStyle} onPress={(...args: any[]) => {
                    if (animationTrigger === "press") {
                        runAnimation();
                    }
                    onPress?.(...args);
                }}>
                    {isGroup ? grandChildren : children.props.children}
                </AnimatedComponent>
            )
        }

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={animationTrigger === "press" ? runAnimation : undefined}
                onLongPress={animationTrigger === "long_press" ? runAnimation : undefined}
            >
                <AnimatedComponent {...restProps} style={isGroup ? style : combinedStyle}>
                    {isGroup ? grandChildren : children.props.children}
                </AnimatedComponent>
            </TouchableOpacity>
        );
    }
);


export default AnimatedWrapper;