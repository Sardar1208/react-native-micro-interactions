import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import CarouselCard from "./CarouselCard";
import Icon from "react-native-vector-icons/Ionicons";

const carouselData = [
  {
    mainIcon: "analytics-outline",
    overlayIcon: "eye-outline",
    title: "Activity Monitoring",
    description: "Track file activity and changes for full transparency",
  },
  {
    mainIcon: "shield-checkmark-outline",
    overlayIcon: "lock-closed-outline",
    title: "Secure Access",
    description: "Only authorized users can make critical changes",
  },
  {
    mainIcon: "cloud-outline",
    overlayIcon: "sync-outline",
    title: "Cloud Sync",
    description: "Access your files from anywhere, anytime",
  },
];

const CarouselContainer = () => {
  const [index, setIndex] = useState(0);
  const current = carouselData[index];

  return (
    <View style={styles.container}>
      <CarouselCard
        key={index}
        mainIcon={<Icon name={current!.mainIcon} size={80} color="#444" />}
        overlayIcon={<Icon name={current!.overlayIcon} size={20} color="#444" />}
        title={current!.title}
        description={current!.description}
        onPress={() => console.log("Learn more pressed")}
        dots={carouselData.map((_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setIndex(i)}
            style={[styles.dot, index === i && styles.activeDot]}
          />
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#EFF3EA",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#D9DFC6",
  },
});

export default CarouselContainer;
