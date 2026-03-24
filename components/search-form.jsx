import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useState } from "react";
import { TextInput, View } from "react-native";
import { textApp } from "../constants/text";
import { uiStyle } from "../styles/style";
import { colorApp } from "../styles/theme";
function SearchForm() {
  const [isFocus, setIsFocus] = useState(false);
  return (
   <View style={[uiStyle.Searchcard,{borderColor: isFocus ? colorApp.second : null ,}]}>
    <EvilIcons name="search" size={24} color="white" />
     <TextInput
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
      }}
      placeholder={textApp.hintSearch}
      placeholderTextColor={colorApp.white}
      style={
     {flex:1}}
    ></TextInput>
   </View>
  );
}

export default SearchForm;
