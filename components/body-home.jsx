import { router } from "expo-router";
import { FlatList, Pressable } from "react-native";
import { DATA } from "../constants/data";
import CardComponent from "./card-component";
function BodyHome() {
  return (
    <FlatList 
      data={DATA}
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => {
        return (
          <Pressable onPress={()=>{
            router.push({
              pathname:"/screens/details",
              params:{
                data:JSON.stringify(item)
              },
            })
          }}>
            <CardComponent
            title={item.name}
            type={item.creator}
            image={item.image}
            date={item.date}
            avatars={item.avatars}
          ></CardComponent>
          </Pressable>
        );
      }}
    />
  );
}

export default BodyHome;
