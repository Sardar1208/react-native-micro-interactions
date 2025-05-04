import Animated from "react-native-reanimated";
import { useAnimation } from "../hooks/useAnimation";
import type { AnimationOptions, AnimationTrigger, AnimationType } from "../types/animations";
import { Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useEffect, useImperativeHandle, useMemo } from "react";
import AnimatedChild from "./AnimatedChild";
import { useRunAnimation } from "../hooks/useRunAnimation";
import { isComponentTouchable } from "../utils/utilityFunctions";

export interface AnimatedWrapperProps {
    children: React.ReactElement<any>,
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
        const { addAnimation, runAnimation, runCurrentAnimation } = useRunAnimation(runIndividualAnimation, isGroup);

        const AnimatedComponent = useMemo(() => {
            return Animated.createAnimatedComponent(children.type as React.ComponentType<any>);
        }, [children.type]);

        const childElements = React.Children.toArray(children.props.children);
        const { style, onPress, onLongPress, ...restProps } = children.props;
        const combinedStyle = [animatedStyle, style];

        useImperativeHandle(ref, () => ({
            runAnimation, // Expose runAnimation to the parent component
        }));

        useEffect(() => {
            if (animationTrigger === "init") {
                runCurrentAnimation();
            }
        }, [children.props.children]);

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

        // If the child provided is already a touchable kind, we dont need to wrap with additional touchable opacity
        if (isComponentTouchable(children)) {
            return (
                <AnimatedComponent {...restProps} style={isGroup ? style : combinedStyle} onPress={(...args: any[]) => {
                    if (animationTrigger === "press") {
                        runCurrentAnimation();
                    }
                    onPress?.(...args);
                }}>
                    {isGroup ? mapGrandChildren() : children.props.children}
                </AnimatedComponent>
            )
        }

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={animationTrigger === "press" ? runCurrentAnimation : undefined}
                onLongPress={animationTrigger === "long_press" ? runCurrentAnimation : undefined}
            >
                <AnimatedComponent {...restProps} style={isGroup ? style : combinedStyle}>
                    {isGroup ? mapGrandChildren() : children.props.children}
                </AnimatedComponent>
            </TouchableOpacity>
        );
    }
);


export default AnimatedWrapper;