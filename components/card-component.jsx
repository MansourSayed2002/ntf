import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { fontStyle, getPixSize, uiStyle } from "../styles/style";
import { SIZES } from "../styles/theme";
import FavoriteButton from "./favorite-button";
import InfoCard from "./info-card";
import NftImageStack from "./ntf-image-stack";
export default function CardComponent({image,title,type,date,avatars}){
    return (
  <View style={[uiStyle.column, { marginHorizontal: getPixSize(10),marginVertical:getPixSize(5)}]}>
        <View style={uiStyle.cardPerson}>
          <NftImageStack mainImage={image} containerHeight="70%" avatars={avatars}></NftImageStack>
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
            <FavoriteButton initialFavorite={true} size={SIZES.large}/>
            </View>
          </View>
        </View>
      </View>
    )
}




function HeaderCard({title,type,date}) {
    return (
      <View style={[uiStyle.column]}>
        <Text style={[fontStyle.nameText, { marginTop: SIZES.small }]}>
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
  