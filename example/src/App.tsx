import { registerRootComponent } from 'expo';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { AnimatedWrapper, multiply } from 'react-native-micro-animations';
import type { AnimatedWrapperRef } from '../../src/components/AnimatedWrapper';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  const animatedWrapperRef = useRef<AnimatedWrapperRef>(null);

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >
      <View style={styles.container}>
        <AnimatedWrapper animationTrigger='init' animationType='text_slide_horizontal' animationOptions={{
          offset: -70
        }} ref={animatedWrapperRef}>
          <Text style={{ color: "black" }}>Submit</Text>
        </AnimatedWrapper>
        {/* <Image source={{ uri: 'https://picsum.photos/200' }} width={50} height={50} /> */}
      </View>
      <TouchableOpacity onPress={() => {animatedWrapperRef.current?.runAnimation()}}>
        <Text>Run Anim</Text>
      </TouchableOpacity>
    </View>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    width: 200,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
