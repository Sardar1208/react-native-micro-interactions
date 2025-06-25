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

export const flipHorizontal = (
  config: IFlipAnimOptions,
  props?: FlipAnimOptions
) => {
  const animationOptions: IFlipAnimOptions = filterAnimOptions(
    config,
    props
  );
  const rotationY = useSharedValue(0);

  const runIndividualAnimation = useCallback(() => {
    rotationY.value = animationOptions.rotation;
    rotationY.value = withSpring(0, {
      duration: animationOptions.duration,
    });
  }, [animationOptions, rotationY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateY: `${rotationY.value}deg` }],
    };
  }, [rotationY]);

  return { animatedStyle, runIndividualAnimation };
};
