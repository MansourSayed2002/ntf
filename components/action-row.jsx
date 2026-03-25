import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontStyle, getPixSize, uiStyle } from "../styles/style";
import { SIZES } from "../styles/theme";
const ActionRow = ({ mainTitle, subTitle }) => {
  return (
    <View style={[uiStyle.card,{marginHorizontal:getPixSize(20),alignItems:"center"}]}>
      <View style={styles.innerRow}>
        <View style={styles.textColumn}>
          <Text style={[fontStyle.hint,{fontSize:SIZES.large}]}>{mainTitle || "Top Text"}</Text>
          <Text style={fontStyle.subHint}>{subTitle || "Bottom Text"}</Text>
        </View>
        <TouchableOpacity style={uiStyle.button}>
          <Text style={fontStyle.titleButton}>piece a pad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionRow;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SIZES.medium,
    backgroundColor: '#1A1A1A', // لون خلفية غامق ليناسب ستايل الـ NFT
    borderRadius: 20,
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center', // توسيط العناصر رأسياً
    justifyContent: 'flex-start', // تبدأ من اليسار (أو اليمين حسب لغة التطبيق)
    gap: 15, // مسافة بين الزرار والعمود
  },
  textColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainText: {
    color: 'white',
    fontSize: SIZES.large,
    fontWeight: '600',
  },
  subText: {
    color: '#AAA',
    fontSize: SIZES.small,
    marginTop: 2,
  },
});

