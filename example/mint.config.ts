import {AnimationConfig} from "react-native-micro-interactions"
export default AnimationConfig({
    "click": {
        shrink: 0.9,
        shrinkDuration: 50,
    },
    "buzz": {
        frequency: 2,
        rotation: 2,
        duration: 50,
    },
    "popIn": {
        duration: 250,
        withBounce: false,
    },
    "dropIn": {
        duration: 250,
        withBounce: true,
        damping: 10,
    },
    "textSlideVertical": {
        duration:100,
        offset: 30,
    },
    "textSlideHorizontal": {
        duration:100,
        offset: 70,
    }
})