import type { IBuzzAnimOptions, IClickAnimOptions, IPopInAnimOptions, ITextSlideAnimOptions } from "../types/animations";

export const clickAnimDefaults: IClickAnimOptions = {
    shrink: 0.9,
    shrinkDuration: 50,
}

export const buzzAnimDefaults: IBuzzAnimOptions = {
    frequency: 2,
    rotation: 2,
    duration: 50,
}

export const popInAnimDefaults: IPopInAnimOptions = {
    duration: 250,
    withBounce: true,
}

export const TextSlideAnimDefaults: ITextSlideAnimOptions = {
    duration: 100,
    offset: 30,
}