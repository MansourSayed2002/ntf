import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MyImages } from "../constants/image";

const NftImageStack = ({
  mainImage,
  avatars = [],
  containerHeight = "45%",
  avatarSize = 25,
}) => {
  return (
    <View style={{ height: containerHeight}}>
      <Image
        source={MyImages[mainImage]}
        style={[styles.mainImage, { backgroundColor: "red",}]}
      />
      <View style={styles.avatarContainer}>
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            source={MyImages[avatar.image]}
            style={[
              styles.avatar,
              {
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarSize / 2,
                marginLeft: index === 0 ? 0 : -avatarSize / 3,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  avatarContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: -6,
    left: 10,
    alignItems: "flex-start",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "white",
  },
});

export default NftImageStack;
