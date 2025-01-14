import { buzz } from "../animations/buzz";
import { click } from "../animations/click";
import { popIn } from "../animations/pop_in";
import { textSlideHorizontal } from "../animations/text_slide_horizontal";
import { textSlideVertical } from "../animations/text_slide_vertical";
import { useConfig } from "../provider/MintProvider";
import type { AnimationOptions, AnimationType, BuzzAnimOptions, ClickAnimOptions, PopInAnimOptions, TextSlideAnimOptions } from "../types/animations";


export const useAnimation = (type: AnimationType, options?: AnimationOptions) => {
    const mintConfig = useConfig()
    switch (type) {
        case 'click':
            return click(mintConfig.config.click, options as ClickAnimOptions,);
        case 'buzz':
            return buzz(mintConfig.config.buzz, options as BuzzAnimOptions);
        case 'pop_in':
            return popIn(mintConfig.config.popIn, options as PopInAnimOptions);
        case 'text_slide_vertical':
            return textSlideVertical(mintConfig.config.textSlideVertical, options as TextSlideAnimOptions);
        case 'text_slide_horizontal':
            return textSlideHorizontal(mintConfig.config.textSlideHorizontal, options as TextSlideAnimOptions);
        default:
            return click(mintConfig.config.click, options as ClickAnimOptions);
    }
}