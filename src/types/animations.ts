export type AnimationType =
  | "click"
  | "buzz"
  | "pop_in"
  | "drop_in"
  | "text_slide_vertical"
  | "text_slide_horizontal";
export type AnimationTrigger = "press" | "long_press" | "double_press" | "init";

export type AnimationOptions =
  | ClickAnimOptions
  | BuzzAnimOptions
  | PopInAnimOptions
  | TextSlideAnimOptions
  | DropInAnimOptions;

export type IAnimationOptions =
  | IClickAnimOptions
  | IBuzzAnimOptions
  | IPopInAnimOptions
  | ITextSlideAnimOptions
  | IDropInAnimOptions;

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

export type PopInAnimOptions = Partial<IPopInAnimOptions>;

export type IPopInAnimOptions = {
  duration: number;
  withBounce: boolean;
};

export type TextSlideAnimOptions = Partial<ITextSlideAnimOptions>;

export type ITextSlideAnimOptions = {
  duration: number;
  offset: number;
};

export type DropInAnimOptions = Partial<IDropInAnimOptions>;

export interface IDropInAnimOptions {
  duration: number;
  withBounce: boolean;
  damping: number;
}
