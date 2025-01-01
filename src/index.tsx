import AnimatedWrapper, { type AnimatedWrapperProps } from "./components/AnimatedWrapper";
import { AnimationConfig } from "./constants/defaults"
import { MintProvider, useConfig } from "./provider/MintProvider";

export type {AnimatedWrapperProps};

export { AnimatedWrapper, AnimationConfig, MintProvider, useConfig };
