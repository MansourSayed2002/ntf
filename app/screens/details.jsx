import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, View } from "react-native";
import ActionRow from "../../components/action-row";
import FavoriteButton from "../../components/favorite-button";
import NftInfoSection from "../../components/inf-info-section";
import InfoRow from "../../components/info-row";
import NftImageStack from "../../components/ntf-image-stack";
import { uiStyle } from "../../styles/style";
import { SIZES } from "../../styles/theme";
export default function DetailsScreen() {
  const { data } = useLocalSearchParams();
  const item = data ? JSON.parse(data) : null;
  return (
    <View style={uiStyle.screen}>
      <View style={{ height: "45%" }}>
        <NftImageStack
          mainImage={item.image}
          avatars={item.avatars}
          containerHeight="100%"
        />
        <View
          style={[
            uiStyle.row,
            uiStyle.stack,
            { top: "15%", left: "5%", right:"3%"},
          ]}
        >
          <Pressable
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons
              name="arrow-back-circle-sharp"
              size={SIZES.xlarge + 10}
              color="white"
            />
          </Pressable>
          <View style={{flex:1}}></View>
          <FavoriteButton initialFavorite={true} size={SIZES.large} />
        </View>
      </View>
      <NftInfoSection
        name={item.name}
        creator={item.creator}
        date={item.date}
      />
<InfoRow label="Contract Address" value={item.address}/>
<InfoRow label="Token ID" value={item.tokenId}/>
<InfoRow label="Token Standard"  value={item.tokenSt}/>
<InfoRow label="Blockchain" value={item.blockchain}/>
<ActionRow mainTitle={"Total bid"} subTitle={"$95.2546"}/>
    </View>
  );
}


