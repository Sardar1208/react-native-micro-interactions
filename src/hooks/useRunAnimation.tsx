import { useRef } from "react";

export function useRunAnimation(runIndividualAnimation: () => void, isGroup: boolean) {

    // Stores all animations initially, then stores the new animations
    let groupAnimationSequence: (() => void)[] = [];

    // Stores all the animations
    const allGroupAnimationSequence = useRef<(() => void)[]>([]);

    function addAnimation(fn: () => void) {
        groupAnimationSequence.push(fn);
        allGroupAnimationSequence.current.push(fn);
    }


    // Run all the animations, not just the new ones
    function runCurrentAnimation() {
        if (isGroup) {
            groupAnimationSequence.forEach((fn, index) => {
                setTimeout(() => {
                    fn();
                }, 200 * index); // Delay each animation by 200ms
            });
        } else {
            runIndividualAnimation();
        }
    }

    // Runs all animations for the first time and then only runs the new animations
    function runAnimation() {
        if (isGroup) {
            allGroupAnimationSequence.current.forEach((fn, index) => {
                setTimeout(() => {
                    fn();
                }, 200 * index); // Delay each animation by 200ms
            });
        } else {
            runIndividualAnimation();
        }
    }


    return { addAnimation, runCurrentAnimation, runAnimation };
}