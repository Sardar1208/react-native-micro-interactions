import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import type { IPopInAnimOptions, PopInAnimOptions } from "../types/animations";
import { filterPopInAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const popIn = (config: IPopInAnimOptions, props?: PopInAnimOptions) => {

    const animationOptions: IPopInAnimOptions = filterPopInAnimOptions(config, props);
    const size = useSharedValue(0);

    const runIndividualAnimation = useCallback(() => {
        size.value = 0;
        if (animationOptions.withBounce) {
            size.value = withSpring(1, { duration: animationOptions.duration });
        } else {
            size.value = withTiming(1, { duration: animationOptions.duration });
        }
    }, [animationOptions, size]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: size.value }],
        };
    }, [size]);

    return { animatedStyle, runIndividualAnimation };
}