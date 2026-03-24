import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image, Text, View } from "react-native";
import { fontStyle, uiStyle } from "../styles/style";
import { SIZES } from '../styles/theme';
function AppBarHome() {
  return (
    <View style={uiStyle.row}>
      <View style={uiStyle.circleAvatar}>
        <Image
          source={require("@/assets/images/avatars/avatar03.jpg")}
          style={uiStyle.imagecircle}
        />
      </View>
      <View style={uiStyle.column} >
        <View style={uiStyle.row}>
            <Text style={[fontStyle.nameText]}>Mansour Sayed Adam</Text>
          <MaterialCommunityIcons name="check-decagram" size={SIZES.large+5} color="white" />
        </View>
            <Text style={fontStyle.subHint}>Creator</Text>
          </View>
        </View>
  );
}

export default AppBarHome;
