import { useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import type { ClickAnimOptions, IClickAnimOptions } from "../types/animations";
import { filterClickAnimOptions } from "../utils/animOptionsFilter";


export const click = (config: IClickAnimOptions, props?: ClickAnimOptions,) => {

    const animationOptions: IClickAnimOptions = filterClickAnimOptions(config, props);
    let size = useSharedValue(1);

    const runIndividualAnimation = () => {
        size.value = withSequence(
            withTiming(animationOptions.shrink, { duration: animationOptions.shrinkDuration }),
            withTiming(1, { duration: 100 }),
        );
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: size.value }],
        }
    })

    return { animatedStyle, runIndividualAnimation };
}