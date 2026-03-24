import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { MyImages } from "../constants/image";
import { fontStyle, getPixSize, uiStyle } from "../styles/style";
import { SIZES, colorApp } from "../styles/theme";
import InfoCard from "./info-card";
function CardComponent({image,title,type,date}){
    return (
        <View style={[uiStyle.column, { marginHorizontal: getPixSize(10),marginVertical:getPixSize(5)}]}>
        <View style={uiStyle.cardPerson}>
          <Image
            source={MyImages[image]}
            style={uiStyle.imageCard}
          />
          <View
            style={[
              uiStyle.column,
              { alignSelf: "flex-start", marginHorizontal: SIZES.large },
            ]}
          >
            <HeaderCard title={title} type={type} date={date}></HeaderCard>
            <View style={[uiStyle.row,]}>
            <InfoCard title="3.9 K" icon="eye-outline"></InfoCard>
            <InfoCard title="12" icon="chat-processing-outline" ></InfoCard>
            <InfoCard title="95.25" icon="ethereum"></InfoCard>
            <View style={uiStyle.buttonFav}>
            <MaterialIcons name="favorite" size={SIZES.large} color={colorApp.second} />
            </View>
            </View>
          </View>
        </View>
      </View>
    )
}

export default CardComponent;



function HeaderCard({title,type,date}) {
    return (
      <View style={[uiStyle.column]}>
        <Text style={[fontStyle.nameText, { marginTop: SIZES.tiny }]}>
         {title}
        </Text>
        <View
          style={[
            uiStyle.row,
            { justifyContent: "space-between", width: "100%" },
          ]}
        >
          <View style={[uiStyle.row, { gap: SIZES.small }]}>
            <Text style={fontStyle.subHint}>{type}</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={SIZES.large}
              color="white"
            />
          </View>
          <Text style={[fontStyle.nameText, { fontSize: SIZES.medium }]}>
            {date}
          </Text>
        </View>
      </View>
    );
  }
  