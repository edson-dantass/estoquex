import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function InsertProduct(props: NativeStackScreenProps<any, any>) {
  const { navigation } = props;
  const handleFocus = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Novo Produto</Text>
      <View style={styles.inputField}>
        <Text style={styles.label}>Codigo do Produto</Text>
        <TextInput style={styles.input} onFocus={handleFocus} />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.label}>Nome do Produto</Text>
        <TextInput style={styles.input} onFocus={handleFocus} />
      </View>
      <StatusBar style="auto" />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 48,
    marginTop: 10,
    backgroundColor: "#E3E5EA",
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  inputField: {
    marginBottom: 30,
    flexDirection: "column",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#585B5E",
  },
  textLogin: {
    marginBottom: 30,
    fontSize: 36,
    fontWeight: "600",
    color: "#1A1B1D",
  },
  btn: {
    backgroundColor: "#4683DF",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
  btnSignIn: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textSignIn: {
    color: "#4683DF",
  },
});
