import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  data: {
    id: number;
    name: string;
  };
};

export default function Product(props: NativeStackScreenProps<any, any>) {
  const { route } = props;
  const {
    data: { id, name },
  } = route.params as Product;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Codigo do Produto #{id}</Text>
      <Text style={styles.productText}>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F1F6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 40,
  },
  productText: {
    fontSize: 52,
    fontWeight: "500",
  },
});
