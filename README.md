# react-native-micro-interactions (Mint)

Effortlessly enhance your React Native components with subtle micro-interactions and animations.

This library allows you to take user rexperience to a next level by enhancing the interactions with your UI. Add smooth animations to every component interaction like initialisation, touch, feedback and more. No need for extra setup or complex logic - just wrap your component with Mint and you're good to go!

## Note

This library is very young and ambitious, so any feedback (good or bad) is highly appreciated.

If you like what it offers, please leave a star on GitHub ❤️

## Installation

```sh
npm install react-native-micro-interactions
```

## Usage

### Example 1: Simple button click
Lets see how we can enhance the UX of a simple button when a user taps it.

```js
import { AnimatedWrapper } from 'react-native-micro-interactions';

return(
    <AnimatedWrapper animationTrigger='press' animationType='click'>
        <TouchableOpacity style={styles.container}>
            <Text>Press me!</Text>
        </TouchableOpacity>
    </AnimatedWrapper>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
  },
});
```

### Example 2: Custom trigger 

But what if you want to trigger the animation on a custom event ? Like on an error / invalid event. You can do that too!

```js
import { AnimatedWrapper, AnimatedWrapperRef } from 'react-native-micro-interactions';

const animatedWrapperRef = useRef<AnimatedWrapperRef>(null);

return(
    <AnimatedWrapper animationType='buzz' ref={animatedWrapperRef}>
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => { animatedWrapperRef.current?.runAnimation() }}
        >
            <Text>Submit</Text>
        </TouchableOpacity>
    </AnimatedWrapper>
)

// same styles...
```

### Example 3: Group Animations

You can create cool group animations easily using the same format. This animates the children inside your component 

```js
import { AnimatedWrapper } from 'react-native-micro-interactions';

return(
    <AnimatedWrapper animationType='pop_in' animationTrigger='init' isGroup={true}>
        <View>
            <View style={styles.container}>
                <Text>react-native</Text>
            </View>
            <View style={styles.container}>
                <Text>micro</Text>
            </View>
            <View style={styles.container}>
                <Text>interactions</Text>
            </View>
        </View>
    </AnimatedWrapper>
)

// same styles...
```

## Defination

**AnimatedWrapper props**

| Prop Name   | Type         | Description                                       |
|-------------|--------------|---------------------------------------------------|
| `animationType` | `AnimationType`   | Specifies which animation you want to run|
| `animationTrigger?` | `AnimationTrigger`     | Specifies when you want to run the animation |
| `animationOptions?`  | `AnimationOptions`     | Customization options for the animation |
| `isGroup?`| `boolean`     | If set to true, this will animate all the children |



**AnimationType**

| Animation   | Description         |
|-------------|--------------|
| `click` | shrinks and expands, giving the effect of click|
| `buzz` | vibrates in a subtle way to give a feedback of error / invalid state |
| `pop_in` | pops in from shrinked state. Usually runs when a component is first rendered on the screen |
| `text_slide_vertical` | text slides in from top / bottom |
| `text_slide_horizontal` | text slides in from top / bottom |



**AnimationTrigger**

| Trigger   | Description         |
|-------------|--------------|
| `init` | Triggers when the component is first rendered on the screen. Usually paired with pop_in animation |
| `press` | Triggers when user presses|
| `long_press` | Triggers when user long presses |


## Customization 

You can further customise the and abstract the configuration using a config file. 

Step 1 - Create a mint.config.ts file in your project root.
Step 2 - In you App.tsx, warp you entry code in a MintProvider 
```js
import { MintProvider } from 'react-native-micro-interactions';
import MintConfig from "../mint.config"

<MintProvider config={MintConfig}>
    // Your entry code
</MintProvider>
```
Step 3 - Customize the values as you like and they will applied by default.

```js
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
        withBounce: true,
    },
    "textSlideVertical": {
        duration:100,
        offset: 30,
    },
    "textSlideHorizontal": {
        duration:100,
        offset: 30,
    }
})
```
You can also do this inline by using the animationOptions prop :)

## License

MIT
