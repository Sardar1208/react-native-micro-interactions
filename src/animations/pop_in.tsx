import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import type { IPopInAnimOptions, PopInAnimOptions } from "../types/animations";
import { filterPopInAnimOptions } from "../utils/animOptionsFilter";

export const popIn = (props?: PopInAnimOptions) => {

    const animationOptions: IPopInAnimOptions = filterPopInAnimOptions(props);
    let size = useSharedValue(0);

    const runAnimation = () => {
        size.value = 0;
        if (animationOptions.withBounce) {
            size.value = withSpring(1, { duration: animationOptions.duration });
        } else {
            size.value = withTiming(1, { duration: animationOptions.duration });
        }
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: size.value }],
        }
    })

    return { animatedStyle, runAnimation };
}