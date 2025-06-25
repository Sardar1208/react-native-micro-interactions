import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import type {
  FlipAnimOptions,
  IFlipAnimOptions,
} from "../types/animations";
import { filterAnimOptions } from "../utils/animOptionsFilter";
import { useCallback } from "react";

export const flipVertical = (
  config: IFlipAnimOptions,
  props?: FlipAnimOptions
) => {
  const animationOptions: IFlipAnimOptions = filterAnimOptions(
    config,
    props
  );
  const rotationX = useSharedValue(0);

  const runIndividualAnimation = useCallback(() => {
    rotationX.value = animationOptions.rotation;
    rotationX.value = withSpring(0, {
      duration: animationOptions.duration,
    });
  }, [animationOptions, rotationX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateX: `${rotationX.value}deg` }],
    };
  }, [rotationX]);

  return { animatedStyle, runIndividualAnimation };
};
