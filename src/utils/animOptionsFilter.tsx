import type { BuzzAnimOptions, ClickAnimOptions, DropInAnimOptions, IBuzzAnimOptions, IClickAnimOptions, IDropInAnimOptions, IPopInAnimOptions, ITextSlideAnimOptions, PopInAnimOptions, TextSlideAnimOptions } from "../types/animations";

function filterClickAnimOptions(config: IClickAnimOptions, props?: ClickAnimOptions,) {
    if (props == null) {
        return config;
    }

    let animationOptions: IClickAnimOptions = {
        shrink: props.shrink ?? config.shrink,
        shrinkDuration: Math.abs(props.shrinkDuration ?? config.shrinkDuration),
    }

    if ((animationOptions.shrink < 0 || animationOptions.shrink > 1)) {
        animationOptions.shrink = config.shrink;
    }

    return animationOptions;
}

function filterPopInAnimOptions(config: IPopInAnimOptions, props?: PopInAnimOptions) {
    if (props == null) {
        return config;
    }

    let animationOptions: IPopInAnimOptions = {
        duration: Math.abs(props.duration ?? config.duration),
        withBounce: props.withBounce ?? config.withBounce,
    }

    return animationOptions;
}

function filterDropInAnimOptions(config: IDropInAnimOptions, props?: DropInAnimOptions) {
    if (props == null) {
        return config;
    }

    let animationOptions: IDropInAnimOptions = {
        duration: Math.abs(props.duration ?? config.duration),
        withBounce: props.withBounce ?? config.withBounce,
        damping: Math.abs(props.damping ?? config.damping),
    }

    return animationOptions;
}

function filterBuzzAnimOptions(config: IBuzzAnimOptions, props?: BuzzAnimOptions) {
    if (props == null) {
        return config;
    }

    let animationOptions: IBuzzAnimOptions = {
        frequency: Math.abs(props.frequency ?? config.frequency),
        rotation: Math.abs(props.rotation ?? config.rotation),
        duration: Math.abs(props.duration ?? config.rotation),
    }

    if ((animationOptions.rotation < 0 || animationOptions.rotation > 360)) {
        animationOptions.rotation = config.rotation;
    }

    return animationOptions;
}

function filterTextSlideAnimOptions(config: ITextSlideAnimOptions, props?: TextSlideAnimOptions) {
    if (props == null) {
        return config;
    }

    let animationOptions: ITextSlideAnimOptions = {
        duration: Math.abs(props.duration ?? config.duration),
        offset: props.offset ?? config.offset,
    }

    return animationOptions;
}

export {
    filterClickAnimOptions,
    filterBuzzAnimOptions,
    filterPopInAnimOptions,
    filterTextSlideAnimOptions,
    filterDropInAnimOptions,
};