import type { IBuzzAnimOptions, IClickAnimOptions, IDropInAnimOptions, IFadeAnimOptions, IFlipAnimOptions, IPopAnimOptions, ISlideAnimOptions } from "../types/animations";

export type AnimationConfigType ={
    "click":IClickAnimOptions,
    "buzz":IBuzzAnimOptions,
    "popIn":IPopAnimOptions,
    "popOut": IPopAnimOptions,
    "dropIn": IDropInAnimOptions,
    "slideVertical":ISlideAnimOptions,
    "slideHorizontal":ISlideAnimOptions,
    "fadeIn": IFadeAnimOptions,
    "fadeOut": IFadeAnimOptions,
    "flipHorizontal": IFlipAnimOptions,
    "flipVertical": IFlipAnimOptions,
}
export function AnimationConfig(config:AnimationConfigType){
    return {config}; 
}