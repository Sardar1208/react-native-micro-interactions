import { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import type { BuzzAnimOptions, IBuzzAnimOptions } from "../types/animations";
import { filterBuzzAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const buzz = (config: IBuzzAnimOptions, props?: BuzzAnimOptions) => {

    const animationOptions: IBuzzAnimOptions = filterBuzzAnimOptions(config, props);

    let rotation = useSharedValue(0);
    let size = useSharedValue(1);

    const runIndividualAnimation = useCallback(() => {
        size.value = withTiming(0.95, { duration: 50 });
        rotation.value = withSequence(
            withRepeat(
                withSequence(
                    withTiming(-animationOptions.rotation, { duration: animationOptions.duration }),
                    withTiming(animationOptions.rotation, { duration: animationOptions.duration }),
                ), animationOptions.frequency, false, (finished?: boolean) => {
                    if (finished) {
                        size.value = withTiming(1, { duration: 100 });
                    }
                }
            ), withTiming(0, { duration: animationOptions.duration }),
        )
    }, [animationOptions, size, rotation]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }, { scale: size.value }],
        }
    }, [size, rotation]);

    return { animatedStyle, runIndividualAnimation };
}