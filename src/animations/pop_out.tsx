import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import type { IPopAnimOptions, PopAnimOptions } from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const popOut = (config: IPopAnimOptions, props?: PopAnimOptions) => {
  const animationOptions: IPopAnimOptions = filterAnimOptions(config, props);
  const size = useSharedValue(1);

  const runIndividualAnimation = useCallback(() => {
    size.value = 1;
    if (animationOptions.withBounce) {
      size.value = withSpring(0, { duration: animationOptions.duration });
    } else {
      size.value = withTiming(0, { duration: animationOptions.duration });
    }
  }, [animationOptions, size]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: size.value }],
    };
  }, [size]);

  return { animatedStyle, runIndividualAnimation };
};
