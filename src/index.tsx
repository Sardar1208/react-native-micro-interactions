import AnimatedWrapper from "./components/AnimatedWrapper";

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { AnimatedWrapper };
