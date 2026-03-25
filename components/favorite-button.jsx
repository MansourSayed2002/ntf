import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { uiStyle } from "../styles/style";
import { SIZES, colorApp } from "../styles/theme";

const FavoriteButton = ({ size = SIZES.large, initialFavorite = false, onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
    if (onToggle) onToggle(!isFavorite); 
  };

  return (
    <Pressable 
      onPress={handlePress}
      style={({ pressed }) => [
        uiStyle.buttonFav,
        { opacity: pressed ? 0.7 : 1 }
      ]}
    >
      <MaterialIcons 
        name={isFavorite ? "favorite" : "favorite-border"} 
        size={size} 
        color={isFavorite ? colorApp.second : "white"} 
      />
    </Pressable>
  );
};

export default FavoriteButton;