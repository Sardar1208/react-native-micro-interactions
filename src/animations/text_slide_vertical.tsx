import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { ITextSlideAnimOptions, TextSlideAnimOptions } from "../types/animations";
import { filterTextSlideAnimOptions } from "../utils/animOptionsFilter";

export const textSlideVertical = (config:ITextSlideAnimOptions,props?: TextSlideAnimOptions) => {
    const animationOptions: ITextSlideAnimOptions = filterTextSlideAnimOptions(config,props);
    let offset = useSharedValue(animationOptions.offset);

    const runIndividualAnimation = () => {
        offset.value = animationOptions.offset;
        offset.value = withTiming(0, { duration: animationOptions.duration })
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: offset.value }],
        }
    })

    return { animatedStyle, runIndividualAnimation };
}