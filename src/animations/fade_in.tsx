import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import type {
  FadeAnimOptions,
  IFadeAnimOptions,
} from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const fadeIn = (
  config: IFadeAnimOptions,
  props?: FadeAnimOptions
) => {
  const animationOptions: IFadeAnimOptions = filterAnimOptions(config, props);
  const opacity = useSharedValue(1);

  const runIndividualAnimation = useCallback(() => {
    opacity.value = 0;
    opacity.value = withTiming(1, { duration: animationOptions.duration });
  }, [animationOptions, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  return { animatedStyle, runIndividualAnimation };
};
