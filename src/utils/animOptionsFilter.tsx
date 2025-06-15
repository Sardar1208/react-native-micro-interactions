import type { IAnimationOptions } from "../types/animations";

function abs(value: number) {
  return Math.abs(value);
}

function clamp(min: number, max: number) {
  return (value: number) => {
    return Math.min(Math.max(value, min), max);
  };
}

const checks: {
  [key: string]: ((value: any) => any)[];
} = {
  shrink: [clamp(0, 0.9)],
  shrinkDuration: [abs],
  frequency: [abs],
  rotation: [clamp(1, 360), abs],
  duration: [abs],
  damping: [abs],
};

function filterAnimOptions<T extends IAnimationOptions>(
  config: T,
  props?: Partial<T>
): T {
  let animationOptions: T = { ...config };

  for (let key in config) {
    let value = props && props[key] !== undefined ? props[key] : config[key];
    if (checks[key] !== undefined) {
      for (let check of checks[key]) {
        value = check(value);
      }
    }
    animationOptions[key] = value;
  }

  return animationOptions;
}

export { filterAnimOptions };
