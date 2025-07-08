import "react";
import { AnimationOptions, AnimationType } from "./animations";

declare module "react" {
  interface Attributes {
    animationType?: AnimationType;
    animationOptions?: AnimationOptions;
  }
}
