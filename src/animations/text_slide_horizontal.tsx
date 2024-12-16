import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { ITextSlideAnimOptions, TextSlideAnimOptions } from "../types/animations";
import { filterTextSlideAnimOptions } from "../utils/animOptionsFilter";

export const textSlideHorizontal = (props?: TextSlideAnimOptions) => {
    const animationOptions: ITextSlideAnimOptions = filterTextSlideAnimOptions(props);
    let offset = useSharedValue(animationOptions.offset);

    const runAnimation = () => {
        offset.value = animationOptions.offset;
        offset.value = withTiming(0, { duration: animationOptions.duration })
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        }
    })

    return { animatedStyle, runAnimation };
}