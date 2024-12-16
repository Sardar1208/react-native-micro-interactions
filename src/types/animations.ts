export type AnimationType = 'click' | 'buzz' | 'pop_in' | 'text_slide_vertical' | 'text_slide_horizontal';
export type AnimationTrigger = 'press' | 'long_press' | 'double_press' | 'init';


export type AnimationOptions = ClickAnimOptions | BuzzAnimOptions | PopInAnimOptions | TextSlideAnimOptions;

export type ClickAnimOptions = {
    shrink?: number,
    shrinkDuration?: number,
}

export type IClickAnimOptions = {
    shrink: number,
    shrinkDuration: number,
}

export type BuzzAnimOptions = {
    frequency?: number,
    rotation?: number,
    duration?: number,
}

export type IBuzzAnimOptions = {
    frequency: number,
    rotation: number,
    duration: number,
}

export type PopInAnimOptions = {
    duration?: number,
    withBounce?: boolean,
}

export type IPopInAnimOptions = {
    duration: number,
    withBounce: boolean,
}

export type TextSlideAnimOptions = {
    duration?: number,
    offset?: number,
}

export type ITextSlideAnimOptions = {
    duration: number,
    offset: number,
}