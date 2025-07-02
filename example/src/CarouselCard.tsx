import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AnimatedWrapper from "../../src/components/AnimatedWrapper";

type CarouselCardProps = {
  mainIcon: React.ReactNode;
  overlayIcon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
  dots: React.ReactNode;
};

const CarouselCard: React.FC<CarouselCardProps> = ({
  mainIcon,
  overlayIcon,
  title,
  description,
  onPress,
  dots,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <AnimatedWrapper
          animationType="flip_horizontal"
          animationTrigger="init"
          animationOptions={{
            duration: 2000,
          }}
        >
          <View>{mainIcon}</View>
        </AnimatedWrapper>
        <AnimatedWrapper
          animationType="pop_in"
          animationTrigger="init"
          animationOptions={{
            duration: 500,
          }}
        >
          <View style={styles.overlay}>
            <View style={styles.overlayCircle}>{overlayIcon}</View>
          </View>
        </AnimatedWrapper>
      </View>
      <AnimatedWrapper
        animationType="drop_in"
        animationTrigger="init"
        isGroup={true}
        animationOptions={{
          duration: 50,
          damping: 30,
        }}
      >
        <View style={styles.card2}>
          <AnimatedWrapper
            animationType="fade_in"
            animationTrigger="init"
            animationOptions={{
              duration: 600,
            }}
          >
            <Text style={styles.title}>{title}</Text>
          </AnimatedWrapper>
          <AnimatedWrapper
            animationType="fade_in"
            animationTrigger="init"
            animationOptions={{
              duration: 800,
            }}
          >
            <Text style={styles.description}>{description}</Text>
          </AnimatedWrapper>
          <AnimatedWrapper
            animationType="fade_in"
            animationTrigger="init"
            animationOptions={{
              duration: 1000,
            }}
          >
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Learn More</Text>
            </TouchableOpacity>
          </AnimatedWrapper>
        </View>
      </AnimatedWrapper>
      <View style={styles.dotsContainer}>{dots}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 300, // fixed height for stability
    borderRadius: 12,
    backgroundColor: "#FFFDF0",
    alignItems: "center",
    padding: 20,
    alignSelf: "center",
    justifyContent: "space-between",

    // ✅ Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // ✅ Elevation for Android
    elevation: 7,
  },
  card2: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "relative",
    marginBottom: 12,
  },
  overlay: {
    position: "absolute",
    top: -85,
    right: -10,
    zIndex: 999999999,
    elevation: 999,
  },
  overlayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EFF3EA",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3, // subtle shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#EFF3EA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "500",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default CarouselCard;
