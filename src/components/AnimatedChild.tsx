import Animated from 'react-native-reanimated';
import { useAnimation } from '../../src/hooks/useAnimation';
import type { AnimationOptions, AnimationType } from '../../src/types/animations';
import { useEffect } from 'react';

interface AnimatedChildProps {
    animationType: AnimationType,
    animationOptions?: AnimationOptions,
    addAnimation: (arg0: () => void) => void,
    children: any,
}

function AnimatedChild({ animationType, animationOptions, addAnimation, children }: AnimatedChildProps) {

    const AnimatedComponent = Animated.createAnimatedComponent(children.type as React.ComponentType<any>);
    const { animatedStyle, runIndividualAnimation } = useAnimation(animationType, animationOptions);

    useEffect(() => {
        addAnimation(runIndividualAnimation);
    }, []);

    const { style, ...restProps } = children.props;
    const combinedStyle = [animatedStyle, style];

    // same is_touchable logic should be implemented here

    return (
        <AnimatedComponent
            {...restProps}
            style={combinedStyle}
        >
            {children.props.children}
        </AnimatedComponent>
    );
};

export default AnimatedChild;
