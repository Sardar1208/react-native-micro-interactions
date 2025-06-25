import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import type { ISlideAnimOptions, SlideAnimOptions } from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const slideHorizontal = (config: ISlideAnimOptions, props?: SlideAnimOptions) => {
    const animationOptions: ISlideAnimOptions = filterAnimOptions(config, props);
    let offset = useSharedValue(0);

    const runIndividualAnimation = useCallback(() => {
        offset.value = animationOptions.offset;
        if (animationOptions.withBounce) {
            offset.value = withSpring(0, { duration: animationOptions.duration })
        } else {
            offset.value = withTiming(0, { duration: animationOptions.duration })
        }
    }, [animationOptions, offset])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        }
    }, [offset]);

    return { animatedStyle, runIndividualAnimation };
}