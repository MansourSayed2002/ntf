import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPixSize } from "../styles/style"; // استايلاتك الجاهزة
import { SIZES } from "../styles/theme";

const InfoRow = ({ label, value, isLast = false }) => (
  <View style={[
    styles.rowContainer, 
    !isLast && styles.borderBottom 
  ]}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default InfoRow;


const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: getPixSize(6), 
    marginHorizontal: getPixSize(16),
  },
  borderBottom: {
    borderBottomWidth: 0.5, // خط رفيع جداً
    borderBottomColor: '#333', // لون رمادي غامق يشبه لون البوردر في الـ Dark Mode
  },
  label: {
    color: '#AAA', // رمادي فاتح للعنوان
    fontSize: SIZES.medium,
  },
  value: {
    color: 'white', // أبيض للقيمة
    fontSize: SIZES.medium,
    fontWeight: '600',
  }
});