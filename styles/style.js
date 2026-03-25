import { StyleSheet } from "react-native";
import { FONTS, SIZES, colorApp } from "./theme";

import { PixelRatio } from "react-native";

export const fontStyle = StyleSheet.create({
  hint: {
    fontSize: SIZES.xlarge,
    color: colorApp.white,
    textAlign: "center",
    fontFamily: FONTS.bold,
  },
  subHint: {
    fontSize: SIZES.normal,
    color: colorApp.white,
    fontFamily: FONTS.regular,
    textAlign: "center",
  },
  titleButton: {
    color: colorApp.white,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    textAlign: "center",
  },
  nameText: {
    fontSize: SIZES.large + 5,
    color: colorApp.white,
    textAlign: "center",
    fontFamily: FONTS.bold,
  },
});

export const uiStyle = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colorApp.bg,
  },
  card: {
    backgroundColor: colorApp.cardBg,
    borderRadius: SIZES.normal,
    padding: PixelRatio.getPixelSizeForLayoutSize(5),
    margin: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginTop:  PixelRatio.getPixelSizeForLayoutSize(60),
  },
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(80),
    height: PixelRatio.getPixelSizeForLayoutSize(80),
    borderRadius: SIZES.medium,
  },
  imageCard:{
    height: "70%",
    width: "100%",
    resizeMode:"stretch",
    borderRadius: SIZES.normal,
  },
  button: {
    backgroundColor: colorApp.second,
    padding: PixelRatio.getPixelSizeForLayoutSize(7),
    borderRadius:  PixelRatio.getPixelSizeForLayoutSize(8),
    width:  PixelRatio.getPixelSizeForLayoutSize(70),
  },
  circleAvatar: {
    width: PixelRatio.getPixelSizeForLayoutSize(23),
    height: PixelRatio.getPixelSizeForLayoutSize(23),
    margin: SIZES.medium,
    borderRadius:  PixelRatio.getPixelSizeForLayoutSize(20),
    overflow: "hidden",
    backgroundColor: colorApp.second,
  },
  buttonFav:{
    // width: PixelRatio.getPixelSizeForLayoutSize(13),
    // height: PixelRatio.getPixelSizeForLayoutSize(13),
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(5),
    marginVertical:PixelRatio.getPixelSizeForLayoutSize(8),
    borderRadius:  PixelRatio.getPixelSizeForLayoutSize(20),
    backgroundColor: colorApp.bg,
    alignItems: "center",
    justifyContent: "center",
    borderColor:colorApp.second,
    borderWidth:1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    gap: SIZES.tiny,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  stack:{
     position: "absolute",
  },
  imagecircle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  cardPerson:{
    backgroundColor: colorApp.cardBg,
    borderRadius: SIZES.normal,
    alignSelf: 'stretch', 
    height: PixelRatio.getPixelSizeForLayoutSize(180),
    overflow: "hidden",
    position: "relative", 
  },
  cardInfo:{
    backgroundColor: colorApp.second,
    paddingVertical: PixelRatio.getPixelSizeForLayoutSize(.5),
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
    height:PixelRatio.getPixelSizeForLayoutSize(14),
    width:PixelRatio.getPixelSizeForLayoutSize(35),
    borderRadius: SIZES.normal,
    marginVertical: SIZES.small,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(2),
  },
  Searchcard:{
    width:"90%",
    height:"5%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    borderWidth:1,
    backgroundColor:colorApp.cardBg,
    paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(6),
    marginHorizontal:PixelRatio.getPixelSizeForLayoutSize(10),
    marginVertical:PixelRatio.getPixelSizeForLayoutSize(3),
    borderRadius:PixelRatio.getPixelSizeForLayoutSize(10),
  }
});


export const getPixSize = (size) => {
  return PixelRatio.getPixelSizeForLayoutSize(size);
};