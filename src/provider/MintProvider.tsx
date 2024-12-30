import { createContext, useContext } from "react"
import type { AnimationConfigType } from '../constants/defaults'
import { AnimationConfig } from '../constants/defaults'

const MintContext = createContext<{ config: AnimationConfigType }>(
    AnimationConfig({
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
            withBounce: true,
        },
        "textSlideVertical": {
            duration: 100,
            offset: 30,
        },
        "textSlideHorizontal": {
            duration: 100,
            offset: 30,
        }
    })
)

// export default MintContext.Provider;
export const MintProvider = ({ config, children }: any) => {
    return <MintContext.Provider value={config}>{children}</MintContext.Provider>
}
export const useConfig = () => {
    try {
        const ctx = useContext(MintContext)
        console.log("here: ", ctx);
        return ctx
    } catch (e) {
        throw new Error("Please wrap your App in MintProvider!");
    }
}