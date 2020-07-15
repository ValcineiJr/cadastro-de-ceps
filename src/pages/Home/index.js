import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../services/api";

export default function Home() {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("R.");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");

  const submit = async () => {
    const response = await api.post("addAddress", {
      cep,
      bairro,
      complemento,
      numero,
      endereco,
      typeAddress: selectedValue,
    });
    if (response.data.status == "Sucesso") {
      setSelectedValue("");
      setEndereco("");
      setNumero("");
      setBairro("");
      setComplemento("");
      setCep("");
      Alert.alert("Cadastro efetuado", "Registo salvo na base de dados");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#5d14a3", "#0a44a3"]} style={styles.gradient}>
        <View style={styles.logo}>
          <Text style={styles.textLogo1}>Ultra</Text>
          <Text style={styles.textLogo2}>Mapping</Text>

          <View style={styles.box1}>
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                marginBottom: 30,
                fontWeight: "500",
              }}
            >
              Cadastro
            </Text>
            <TouchableHighlight
              style={{ position: "absolute", right: 18, top: 10 }}
              onPress={() => navigation.navigate("List")}
            >
              <Feather name="edit" size={20} color="#888" />
            </TouchableHighlight>
            <Text style={styles.title}>
              Utilize os campos abaixo para cadastrar endereços
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#ddd",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,

                borderRadius: 8,
              }}
            >
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
                style={styles.picker}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label="Av." value="Av." />
                <Picker.Item label="R." value="R." />
              </Picker>
              <TextInput
                placeholder="Endereço"
                value={endereco}
                onChangeText={(txt) => setEndereco(txt)}
                style={{
                  height: 40,
                  width: 230,
                  paddingLeft: 8,
                  backgroundColor: "#fffafa",
                }}
              />
              <TextInput
                style={{
                  height: 40,
                  width: 50,
                  paddingLeft: 8,
                  borderRadius: 8,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                value={numero}
                onChangeText={(txt) => setNumero(txt)}
                maxLength={4}
                placeholder="Nº"
                keyboardType="numeric"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-evenly",
              }}
            >
              <TextInput
                value={bairro}
                onChangeText={(txt) => setBairro(txt)}
                placeholder="Bairro"
                style={styles.bairro}
              />
              <TextInput
                value={complemento}
                onChangeText={(txt) => setComplemento(txt)}
                placeholder="Complemento"
                style={styles.complemento}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <TextInput
                placeholder="CEP"
                value={cep}
                onChangeText={(txt) => setCep(txt)}
                style={styles.cep}
              />

              <LinearGradient
                colors={["#5d14a3", "#0a44a3"]}
                start={[8, 13]}
                style={{
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  backgroundColor: "#0a44a3",
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              >
                <TouchableHighlight onPress={() => alert("Procurar")}>
                  <Feather
                    name="search"
                    size={20}
                    color="#fff"
                    style={{ borderWidth: 0 }}
                  />
                </TouchableHighlight>
              </LinearGradient>
            </View>
            <LinearGradient
              colors={["#5d14a3", "#0a44a3"]}
              start={[1, 0]}
              style={{
                backgroundColor: "#ff3",
                marginTop: 30,
                marginHorizontal: 40,
                borderRadius: 8,
              }}
            >
              <TouchableHighlight onPress={submit}>
                <View style={{ alignItems: "center", padding: 10 }}>
                  <Text style={{ color: "#fff" }}>Cadastrar</Text>
                </View>
              </TouchableHighlight>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    marginTop: 50,
    backgroundColor: "#FDFDFD",
    borderRadius: 15,
    padding: 11,
    position: "relative",
    paddingBottom: 30,
  },
  bairro: {
    height: 40,
    backgroundColor: "#FDFDFD",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginRight: 5,
    flex: 1,
  },
  complemento: {
    height: 40,
    backgroundColor: "#FDFDFD",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    flex: 1,
  },
  cep: {
    height: 40,
    backgroundColor: "#FDFDFD",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#888",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 15,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
  },
  logo: {},
  textLogo1: {
    color: "#FDFDFD",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "700",
  },
  textLogo2: {
    color: "#FDFDFD",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "500",
  },
  pickerItem: {
    color: "red",
  },
  picker: {
    width: 40,
    height: 40,
    backgroundColor: "#FDFDFD",
    borderColor: "#ff3",
    borderWidth: 1,
  },
});
