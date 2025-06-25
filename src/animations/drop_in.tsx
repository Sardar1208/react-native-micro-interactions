import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import type { IDropInAnimOptions, DropInAnimOptions } from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const dropIn = (config: IDropInAnimOptions, props?: DropInAnimOptions) => {
    const animationOptions: IDropInAnimOptions = filterAnimOptions(config, props);
    const opacity = useSharedValue(1);
    const translateY = useSharedValue(0);

    const runIndividualAnimation = useCallback(() => {
        opacity.value = 0;
        translateY.value = 50;

        if (animationOptions.withBounce) {
            translateY.value = withSpring(0, {
                damping: animationOptions.damping,
            });
            opacity.value = withTiming(1, { duration: animationOptions.duration });
        } else {
            opacity.value = withTiming(1, { duration: animationOptions.duration });
            translateY.value = withTiming(0, { duration: animationOptions.duration });
        }
    }, [animationOptions, opacity, translateY]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value },
            ],
        };
    }, [opacity, translateY]);

    return { animatedStyle, runIndividualAnimation };
};
