import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { fontStyle, uiStyle } from "../styles/style";
import { SIZES } from "../styles/theme";
function InfoCard({ title, icon }) {
  return (
    <View
      style={[
        uiStyle.row,
        uiStyle.cardInfo
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={SIZES.large}
        color="white"
      />
      <Text style={fontStyle.subHint}>{title}</Text>
    </View>
  );
}

export default InfoCard;
