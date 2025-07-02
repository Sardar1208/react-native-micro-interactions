import { registerRootComponent } from "expo";
import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AnimatedWrapper } from "react-native-micro-interactions";
import type { AnimatedWrapperRef } from "../../src/components/AnimatedWrapper";
import CarouselContainer from "./CarouselContainer";

export default function App() {
  const errorSubmitRef = useRef<AnimatedWrapperRef>(null);
  const [showPlainList, setShowPlainList] = useState(false);
  const [showMintList, setShowMintList] = useState(false);
  const [showPlainDescription, setShowPlainDescription] = useState(false);
  const [showMintDescription, setShowMintDescription] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <CarouselContainer />
    </SafeAreaView>
  );
}

registerRootComponent(App);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#D9DFC6",
    paddingHorizontal: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f8f8f8",
    marginBottom: 10,
  },
  rowBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "rgba(255, 255, 0, 0.1)",
  },
  mintBox: {
    backgroundColor: "rgba(30, 144, 255, 0.1)",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    color: "#f0f0f0",
    marginRight: 10,
  },
  buttonPlain: {
    backgroundColor: "#555",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonMint: {
    backgroundColor: "#673AB7",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  group: {
    marginTop: 10,
  },
  tile: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#777",
    marginVertical: 20,
  },
  boxLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f8f8f8",
    marginBottom: 5,
    textAlign: "center",
  },
});
