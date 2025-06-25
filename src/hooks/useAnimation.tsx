import { buzz } from "../animations/buzz";
import { click } from "../animations/click";
import { dropIn } from "../animations/drop_in";
import { fadeIn } from "../animations/fade_in";
import { fadeOut } from "../animations/fade_out";
import { flipHorizontal } from "../animations/flip_horizontal";
import { flipVertical } from "../animations/flip_vertical";
import { popIn } from "../animations/pop_in";
import { popOut } from "../animations/pop_out";
import { slideHorizontal } from "../animations/slide_horizontal";
import { slideVertical } from "../animations/slide_vertical";
import { useConfig } from "../provider/MintProvider";
import type { AnimationOptions, AnimationType, BuzzAnimOptions, ClickAnimOptions, DropInAnimOptions, FadeAnimOptions, FlipAnimOptions, PopAnimOptions, SlideAnimOptions } from "../types/animations";


export const useAnimation = (type: AnimationType, options?: AnimationOptions) => {
    const mintConfig = useConfig()
    switch (type) {
        case 'click':
            return click(mintConfig.config.click, options as ClickAnimOptions,);
        case 'buzz':
            return buzz(mintConfig.config.buzz, options as BuzzAnimOptions);
        case 'pop_in':
            return popIn(mintConfig.config.popIn, options as PopAnimOptions);
        case 'pop_out':
            return popOut(mintConfig.config.popIn, options as PopAnimOptions);
        case 'drop_in':
            return dropIn(mintConfig.config.dropIn, options as DropInAnimOptions);
        case 'fade_in':
            return fadeIn(mintConfig.config.fadeIn, options as FadeAnimOptions);
        case 'fade_out':
            return fadeOut(mintConfig.config.fadeIn, options as FadeAnimOptions);
        case 'flip_horizontal':
            return flipHorizontal(mintConfig.config.flipHorizontal, options as FlipAnimOptions);
        case 'flip_vertical':
            return flipVertical(mintConfig.config.flipHorizontal, options as FlipAnimOptions);
        case 'slide_vertical':
            return slideVertical(mintConfig.config.slideVertical, options as SlideAnimOptions);
        case 'slide_horizontal':
            return slideHorizontal(mintConfig.config.slideHorizontal, options as SlideAnimOptions);
        default:
            return click(mintConfig.config.click, options as ClickAnimOptions);
    }
}