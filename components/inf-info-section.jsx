import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { Text, View } from 'react-native';
import { fontStyle, uiStyle } from "../styles/style";
import { SIZES } from "../styles/theme";
import InfoCard from "./info-card";

const NftInfoSection = ({ name, creator, date, views = "3.9 K", comments = "12", price = "95.25" }) => {
  return (
    <>
      <View style={[uiStyle.column, { margin: SIZES.large }]}>
        <Text style={[fontStyle.nameText, { marginTop: SIZES.tiny }]}>
          {name}
        </Text>
        <View style={[uiStyle.row, { justifyContent: "space-between", width: "100%" }]}>
          <View style={[uiStyle.row, { gap: SIZES.small }]}>
            <Text style={fontStyle.subHint}>{creator}</Text>
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
      <View
        style={[
          uiStyle.row,
          {
            justifyContent: "space-evenly",
            width: "100%",
            height: "6%", // تأكد إن الأب له ارتفاع كافي عشان الـ 6% تظهر
          },
        ]}
      >
        <InfoCard title={views} icon="eye-outline" />
        <InfoCard title={comments} icon="chat-processing-outline" />
        <InfoCard title={price} icon="ethereum" />
      </View>
    </>
  );
};

export default NftInfoSection;