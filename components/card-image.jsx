import { uiStyle } from "@/styles/style";
import { Image, View } from "react-native";

import { MyImages } from "../constants/image";
 
function CardImage({image,style}){
    return (
        <View style={[uiStyle.card,style]}>
        <Image source={MyImages[image]} style={uiStyle.image}/>
        </View>
    )
}

export default CardImage;