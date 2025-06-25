import { createContext, useContext } from "react";
import type { AnimationConfigType } from "../constants/defaults";
import { AnimationConfig } from "../constants/defaults";

const MintContext = createContext<{ config: AnimationConfigType }>(
  AnimationConfig({
    click: {
      shrink: 0.9,
      shrinkDuration: 50,
    },
    buzz: {
      frequency: 2,
      rotation: 2,
      duration: 50,
    },
    popIn: {
      duration: 250,
      withBounce: true,
    },
    popOut: {
      duration: 250,
      withBounce: false,
    },
    dropIn: {
      duration: 250,
      withBounce: true,
      damping: 10,
    },
    fadeIn: {
      duration: 300,
    },
    fadeOut: {
      duration: 300,
    },
    flipHorizontal: {
      duration: 1500,
      rotation: 180,
    },
    flipVertical: {
      duration: 1500,
      rotation: 180,
    },
    slideVertical: {
      duration: 1000,
      offset: -30,
      withBounce: true,
    },
    slideHorizontal: {
      duration: 1000,
      offset: -50,
      withBounce: true,
    },
  })
);

// export default MintContext.Provider;
export const MintProvider = ({ config, children }: any) => {
  return <MintContext.Provider value={config}>{children}</MintContext.Provider>;
};
export const useConfig = () => {
  try {
    const ctx = useContext(MintContext);
    return ctx;
  } catch (e) {
    throw new Error("Please wrap your App in MintProvider!");
  }
};
