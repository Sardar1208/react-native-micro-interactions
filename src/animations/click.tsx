import { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import type { ClickAnimOptions, IClickAnimOptions } from "../types/animations";
import { filterClickAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";


export const click = (config: IClickAnimOptions, props?: ClickAnimOptions,) => {

    const animationOptions: IClickAnimOptions = filterClickAnimOptions(config, props);
    let size = useSharedValue(1);

    const runIndividualAnimation = useCallback(() => {
        size.value = withSequence(
            withTiming(animationOptions.shrink, { duration: animationOptions.shrinkDuration }),
            withTiming(1, { duration: 100 }),
        );
    }, [animationOptions, size]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: size.value }],
        }
    }, [size]);

    return { animatedStyle, runIndividualAnimation };
}