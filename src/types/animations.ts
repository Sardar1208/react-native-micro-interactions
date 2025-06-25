export type AnimationType =
  | "click"
  | "buzz"
  | "pop_in"
  | "pop_out"
  | "drop_in"
  | "fade_in"
  | "fade_out"
  | "flip_horizontal"
  | "flip_vertical"
  | "slide_vertical"
  | "slide_horizontal";
export type AnimationTrigger = "press" | "long_press" | "double_press" | "init";

export type AnimationOptions =
  | ClickAnimOptions
  | BuzzAnimOptions
  | PopAnimOptions
  | SlideAnimOptions
  | DropInAnimOptions
  | FlipAnimOptions
  | FadeAnimOptions;

export type IAnimationOptions =
  | IClickAnimOptions
  | IBuzzAnimOptions
  | IPopAnimOptions
  | ISlideAnimOptions
  | IDropInAnimOptions
  | IFlipAnimOptions
  | IFadeAnimOptions;

export type ClickAnimOptions = Partial<IClickAnimOptions>;

export type IClickAnimOptions = {
  shrink: number;
  shrinkDuration: number;
};

export type BuzzAnimOptions = Partial<IBuzzAnimOptions>;

export type IBuzzAnimOptions = {
  frequency: number;
  rotation: number;
  duration: number;
};

export type PopAnimOptions = Partial<IPopAnimOptions>;

export type IPopAnimOptions = {
  duration: number;
  withBounce: boolean;
};

export type SlideAnimOptions = Partial<ISlideAnimOptions>;

export type ISlideAnimOptions = {
  duration: number;
  offset: number;
  withBounce: boolean;
};

export type DropInAnimOptions = Partial<IDropInAnimOptions>;

export interface IDropInAnimOptions {
  duration: number;
  withBounce: boolean;
  damping: number;
}

export type FadeAnimOptions = Partial<IFadeAnimOptions>;

export type IFadeAnimOptions = {
  duration: number;
};

export type FlipAnimOptions = Partial<IFlipAnimOptions>;

export type IFlipAnimOptions = {
  duration: number;
  rotation: number;
};

