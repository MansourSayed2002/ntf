import { FlatList } from "react-native";
import { DATA } from "../constants/data";
import CardComponent from "./card-component";
function BodyHome() {
  return (
    <FlatList 
      data={DATA}
      keyExtractor={(item)=>item.id}
      renderItem={({item}) => {
        return (
          <CardComponent
            title={item.name}
            type={item.creator}
            image={item.image}
            date={item.date}
          ></CardComponent>
        );
      }}
    />
  );
}

export default BodyHome;
