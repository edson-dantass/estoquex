import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type dataProduct = {
  id: number;
  name: string;
};
export default function Products(props: NativeStackScreenProps<any, any>) {
  const { navigation } = props;
  const products = [
    {
      id: 12938,
      name: "Celular",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 39287,
      name: "Cama",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 31255,
      name: "Mesa",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 33568,
      name: "Ventilador",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 987865,
      name: "Televisão",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 232356,
      name: "Cadeira",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 434580,
      name: "Espelho",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
    {
      id: 33346,
      name: "Notebook",
      action: (data: dataProduct) => navigation.navigate("Product", { data }),
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.labelPage}>Produtos</Text>
      <ScrollView>
        <View style={styles.container}>
          {products.map(({ id, name, action }) => (
            <TouchableOpacity
              key={id}
              style={styles.menuItem}
              onPress={() => action({ id, name })}
            >
              <Text style={styles.menuItemText}>{name}</Text>
              <Text style={styles.menuItemText}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F1F6",
  },
  labelPage: {
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  container: {
    padding: 24,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuItemExit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ED3217",
    borderRadius: 6,
    height: 70,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  menuItemText: {
    fontSize: 20,
    fontWeight: "500",
  },
  menuItemExitText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
});
