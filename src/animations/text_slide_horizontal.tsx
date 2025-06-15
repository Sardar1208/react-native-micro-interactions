import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { ITextSlideAnimOptions, TextSlideAnimOptions } from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const textSlideHorizontal = (config: ITextSlideAnimOptions, props?: TextSlideAnimOptions) => {
    const animationOptions: ITextSlideAnimOptions = filterAnimOptions(config, props);
    let offset = useSharedValue(animationOptions.offset);

    const runIndividualAnimation = useCallback(() => {
        offset.value = animationOptions.offset;
        offset.value = withTiming(0, { duration: animationOptions.duration })
    }, [animationOptions, offset])

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        }
    }, [offset]);

    return { animatedStyle, runIndividualAnimation };
}