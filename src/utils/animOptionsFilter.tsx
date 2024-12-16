import type { BuzzAnimOptions, ClickAnimOptions, IBuzzAnimOptions, IClickAnimOptions, IPopInAnimOptions, ITextSlideAnimOptions, PopInAnimOptions, TextSlideAnimOptions } from "../types/animations";
import { buzzAnimDefaults, clickAnimDefaults, popInAnimDefaults, TextSlideAnimDefaults } from "../constants/defaults";

function filterClickAnimOptions(props?: ClickAnimOptions) {
    if (props == null) {
        return clickAnimDefaults;
    }

    let animationOptions: IClickAnimOptions = {
        shrink: props.shrink ?? clickAnimDefaults.shrink,
        shrinkDuration: Math.abs(props.shrinkDuration ?? clickAnimDefaults.shrinkDuration),
    }

    if ((animationOptions.shrink < 0 || animationOptions.shrink > 1)) {
        animationOptions.shrink = clickAnimDefaults.shrink;
    }

    return animationOptions;
}

function filterPopInAnimOptions(props?: PopInAnimOptions) {
    if (props == null) {
        return popInAnimDefaults;
    }

    let animationOptions: IPopInAnimOptions = {
        duration: Math.abs(props.duration ?? popInAnimDefaults.duration),
        withBounce: props.withBounce ?? popInAnimDefaults.withBounce,
    }

    return animationOptions;
}

function filterBuzzAnimOptions(props?: BuzzAnimOptions) {
    if (props == null) {
        return buzzAnimDefaults;
    }

    let animationOptions: IBuzzAnimOptions = {
        frequency: Math.abs(props.frequency ?? buzzAnimDefaults.frequency),
        rotation: Math.abs(props.rotation ?? buzzAnimDefaults.rotation),
        duration: Math.abs(props.duration ?? buzzAnimDefaults.rotation),
    }

    if ((animationOptions.rotation < 0 || animationOptions.rotation > 360)) {
        animationOptions.rotation = buzzAnimDefaults.rotation;
    }

    return animationOptions;
}

function filterTextSlideAnimOptions(props?: TextSlideAnimOptions) {
    if (props == null) {
        return TextSlideAnimDefaults;
    }

    let animationOptions: ITextSlideAnimOptions = {
        duration: Math.abs(props.duration ?? TextSlideAnimDefaults.duration),
        offset: props.offset ?? TextSlideAnimDefaults.offset,
    }

    return animationOptions;
}

export {
    filterClickAnimOptions,
    filterBuzzAnimOptions,
    filterPopInAnimOptions,
    filterTextSlideAnimOptions,
};