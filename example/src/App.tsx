import { registerRootComponent } from 'expo';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { AnimatedWrapper, MintProvider } from 'react-native-micro-animations';
import type { AnimatedWrapperRef } from '../../src/components/AnimatedWrapper';
import MintConfig from '../mint.config';

export default function App() {
  const errorSubmitRef = useRef<AnimatedWrapperRef>(null);
  const [showPlainList, setShowPlainList] = useState(false);
  const [showMintList, setShowMintList] = useState(false);
  const [showPlainDescription, setShowPlainDescription] = useState(false);
  const [showMintDescription, setShowMintDescription] = useState(false);

  return (
    <MintProvider config={MintConfig}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          {/* Section: Simple Button */}
          <Text style={styles.sectionHeader}>Example 1: Simple Button</Text>
          <View style={styles.rowBoxContainer}>
            <View style={[styles.box, styles.plainBox]}>
              <Text style={styles.boxLabel}>Before</Text>
              <TouchableOpacity style={styles.buttonPlain}>
                <Text style={styles.buttonText}>Press me</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.box, styles.mintBox]}>
              <Text style={styles.boxLabel}>Mint</Text>
              <AnimatedWrapper animationTrigger="press" animationType="click">
                <TouchableOpacity style={styles.buttonMint} activeOpacity={1}>
                  <Text style={styles.buttonText}>Press me</Text>
                </TouchableOpacity>
              </AnimatedWrapper>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Section: Error Animation */}
          <Text style={styles.sectionHeader}>Example 2: Error Animation</Text>
          <View style={styles.columnBoxContainer}>
            <View style={[styles.box, styles.plainBox]}>
              <Text style={styles.boxLabel}>Before</Text>
              <View style={styles.row}>
                <TextInput style={styles.textInput} value="example@domain.com" editable={false} />
                <TouchableOpacity style={styles.buttonPlain}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.box, styles.mintBox]}>
              <Text style={styles.boxLabel}>After(Mint)</Text>
              <View style={styles.row}>
                <TextInput style={styles.textInput} value="example@domain.com" editable={false} />
                <AnimatedWrapper animationType="buzz" ref={errorSubmitRef}>
                  <TouchableOpacity
                    style={styles.buttonMint}
                    activeOpacity={1}
                    onPress={() => errorSubmitRef.current?.runAnimation()}
                  >
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </AnimatedWrapper>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Section: Group Animation */}
          <Text style={styles.sectionHeader}>Example 3: Group Animation</Text>
          <View style={styles.columnBoxContainer}>
            <View style={[styles.box, styles.plainBox]}>
              <Text style={styles.boxLabel}>Before</Text>

              <TouchableOpacity
                style={styles.buttonPlain}
                onPress={() => setShowPlainList(!showPlainList)}
              >
                <Text style={styles.buttonText}>Show Movie Categories</Text>
              </TouchableOpacity>
              {showPlainList && (
                <View style={styles.group}>
                  <Text style={styles.tile}>Category 1</Text>
                  <Text style={styles.tile}>Category 2</Text>
                  <Text style={styles.tile}>Category 3</Text>
                </View>
              )}
            </View>

            <View style={[styles.box, styles.mintBox]}>
              <Text style={styles.boxLabel}>After(Mint)</Text>

              <TouchableOpacity
                style={styles.buttonMint}
                onPress={() => {
                  setShowMintList(!showMintList);
                }}
              >
                <Text style={styles.buttonText}>Show Movie Categories</Text>
              </TouchableOpacity>
              {showMintList && (
                <AnimatedWrapper
                  isGroup={true}
                  animationType="pop_in"
                  animationTrigger='init'
                  animationOptions={{
                    withBounce: false,
                  }}
                >
                  <View style={styles.group}>
                    <Text style={styles.tile}>Category 1</Text>
                    <Text style={styles.tile}>Category 2</Text>
                    <Text style={styles.tile}>Category 3</Text>
                  </View>
                </AnimatedWrapper>
              )}
            </View>
          </View>

          <View style={styles.divider} />

          {/* Section: Text Slide Animation */}
          <Text style={styles.sectionHeader}>Example 4: Text Slide Animation</Text>
          <View style={styles.columnBoxContainer}>
            <View style={[styles.box, styles.plainBox]}>
              <Text style={styles.boxLabel}>Before</Text>

              <TouchableOpacity
                style={styles.buttonPlain}
                onPress={() => setShowPlainDescription(!showPlainDescription)}
              >
                <Text style={styles.buttonText}>Show Description</Text>
              </TouchableOpacity>
              {showPlainDescription && <Text style={styles.description}>This is a plain description.</Text>}
            </View>

            <View style={[styles.box, styles.mintBox]}>
              <Text style={styles.boxLabel}>After(Mint)</Text>

              <TouchableOpacity
                style={styles.buttonMint}
                onPress={() => setShowMintDescription(!showMintDescription)}
              >
                <Text style={styles.buttonText}>Show Description</Text>
              </TouchableOpacity>
              {showMintDescription && (
                <AnimatedWrapper animationType="text_slide_horizontal" animationTrigger='init'>
                  <Text style={styles.description}>This is a Mint animated description.</Text>
                </AnimatedWrapper>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </MintProvider>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    paddingTop: 20,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8f8f8',
    marginBottom: 10,
  },
  rowBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  columnBoxContainer: {
    marginBottom: 30,
  },
  box: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  plainBox: {
    backgroundColor: 'rgba(255, 255, 0, 0.1)',
  },
  mintBox: {
    backgroundColor: 'rgba(30, 144, 255, 0.1)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    color: '#f0f0f0',
    marginRight: 10,
  },
  buttonPlain: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonMint: {
    backgroundColor: '#673AB7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  group: {
    marginTop: 10,
  },
  tile: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#777',
    marginVertical: 20,
  },
  boxLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f8f8f8',
    marginBottom: 5,
    textAlign: 'center',
  },
});
