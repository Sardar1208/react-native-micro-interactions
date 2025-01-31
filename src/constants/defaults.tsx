import type { IBuzzAnimOptions, IClickAnimOptions, IDropInAnimOptions, IPopInAnimOptions, ITextSlideAnimOptions } from "../types/animations";

export type AnimationConfigType ={
    "click":IClickAnimOptions,
    "buzz":IBuzzAnimOptions,
    "popIn":IPopInAnimOptions,
    "dropIn": IDropInAnimOptions,
    "textSlideVertical":ITextSlideAnimOptions,
    "textSlideHorizontal":ITextSlideAnimOptions
}
export function AnimationConfig(config:AnimationConfigType){
    return {config}; 
}