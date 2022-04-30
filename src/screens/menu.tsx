import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Menu(props: NativeStackScreenProps<any, any>) {
  const { navigation } = props;
  const menu = [
    {
      id: 0,
      name: "Listar Produtos",
      action: () => navigation.navigate("Products"),
      styles: {
        container: styles.menuItem,
        text: styles.menuItemText,
      },
    },
    {
      id: 1,
      name: "Cadastrar Produtos",
      action: () => navigation.navigate("InsertProduct"),
      styles: {
        container: styles.menuItem,
        text: styles.menuItemText,
      },
    },
    {
      id: 2,
      name: "Sair",
      action: () => navigation.navigate("Login"),
      styles: {
        container: styles.menuItemExit,
        text: styles.menuItemExitText,
      },
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.labelPage}>Menu</Text>
      <View style={styles.container}>
        {menu.map(({ id, name, styles, action }) => (
          <TouchableOpacity key={id} style={styles.container} onPress={action}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>→</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    paddingVertical: 10,
    fontSize: 32,
    fontWeight: "600",
    color: "#333",
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
