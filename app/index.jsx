import { SIZES } from '@/styles/theme';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import CardImage from "../components/card-image";
import { textApp } from "../constants/text";
import { fontStyle, uiStyle } from "../styles/style";




export default function NTfApp() {
  const fontloaded=useFonts({
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
  });
  if (!fontloaded) return null;
  return  (
    <View style={[uiStyle.screen,{justifyContent: "center"}]} >
    <View style={uiStyle.containerImage}>
      <CardImage image={"nft06"}></CardImage>
      <CardImage image={"nft08"} style={{ marginTop: SIZES.xlarge+30, }}></CardImage>
      <CardImage image={"nft04"}></CardImage>
    </View>
   <View style={{marginVertical:SIZES.large,marginHorizontal:SIZES.large,gap:SIZES.large}}>
   <Text style={[fontStyle.hint]}>
          {textApp.welHint}
      </Text>
      <Text style={fontStyle.subHint}>
          {textApp.subHint}
      </Text>
   </View>
    <View style={{height:SIZES.xlarge+110, alignSelf:"center",justifyContent:"flex-end"}}>
    <Pressable style={uiStyle.button} onPress={()=>{
      router.push("/screens/home");
    }}>
    <Text style={fontStyle.titleButton}>{textApp.getStarted}</Text>
   </Pressable>
    </View>
  </View>
);
}




