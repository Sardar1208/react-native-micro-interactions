import Animated from "react-native-reanimated";
import { useAnimation } from "../hooks/useAnimation";
import type { AnimationOptions, AnimationTrigger, AnimationType } from "../types/animations";
import { Text, TouchableOpacity } from "react-native";
import { forwardRef, useEffect, useImperativeHandle } from "react";

interface AnimatedWrapperProps {
    children: React.ReactElement,
    animationType: AnimationType,
    animationTrigger: AnimationTrigger,
    animationOptions?: AnimationOptions,
}

export interface AnimatedWrapperRef {
    runAnimation: () => void;
}

const AnimatedWrapper = forwardRef<AnimatedWrapperRef, AnimatedWrapperProps>(
    ({ children, animationTrigger, animationType, animationOptions }, ref) => {
        if (animationType === "text_slide_vertical" || animationType === "text_slide_horizontal" && children.type !== Text) {
            return children;
        }

        const { animatedStyle, runAnimation } = useAnimation(animationType, animationOptions);

        const AnimatedChild = Animated.createAnimatedComponent(
            children.type as React.ComponentType<any>
        );
        const { style, ...restProps } = children.props;
        const combinedStyle = [animatedStyle, style];

        useImperativeHandle(ref, () => ({
            runAnimation, // Expose runAnimation to the parent component
        }));

        useEffect(() => {
            if (animationTrigger === "init") {
                runAnimation();
            }
        }, []);

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={animationTrigger === "press" ? runAnimation : undefined}
                onLongPress={animationTrigger === "long_press" ? runAnimation : undefined}
            >
                <AnimatedChild {...restProps} style={combinedStyle}>
                    {children.props.children}
                </AnimatedChild>
            </TouchableOpacity>
        );
    }
);


export default AnimatedWrapper;