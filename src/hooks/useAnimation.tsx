import { buzz } from "../animations/buzz";
import { click } from "../animations/click";
import { popIn } from "../animations/pop_in";
import { textSlideHorizontal } from "../animations/text_slide_horizontal";
import { textSlideVertical } from "../animations/text_slide_vertical";
import type { AnimationOptions, AnimationType, BuzzAnimOptions, ClickAnimOptions, PopInAnimOptions, TextSlideAnimOptions } from "../types/animations";


export const useAnimation = (type: AnimationType, options?: AnimationOptions) => {
    switch (type) {
        case 'click':
            return click(options as ClickAnimOptions);
        case 'buzz':
            return buzz(options as BuzzAnimOptions);
        case 'pop_in':
            return popIn(options as PopInAnimOptions);
        case 'text_slide_vertical':
            return textSlideVertical(options as TextSlideAnimOptions);
        case 'text_slide_horizontal':
            return textSlideHorizontal(options as TextSlideAnimOptions);
        default:
            return click(options as ClickAnimOptions);
    }
}