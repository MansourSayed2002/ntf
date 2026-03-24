import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarHome from "../../components/app-bar-home";
import BodyHome from "../../components/body-home";
import SearchForm from "../../components/search-form";
import { getPixSize, uiStyle } from "../../styles/style";
export default function Home() {
  return (
    <SafeAreaView style={[uiStyle.screen]}>
      <View style={{marginBottom:getPixSize(60)}}>
       <AppBarHome></AppBarHome>
       <SearchForm></SearchForm>
       <BodyHome>
       </BodyHome>
      </View>
    </SafeAreaView>
  );
}


