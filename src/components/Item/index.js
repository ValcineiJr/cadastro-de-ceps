import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import api from "../../services/api";
// import { Container } from './styles';

const Item = ({ data, loadAddress }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const Buttons = () => (
    <View
      style={{
        marginTop: 40,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <TouchableOpacity style={{}}>
        <View
          style={{
            backgroundColor: "#5d14a3",
            width: 140,
            borderRadius: 5,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="edit" size={20} color="#fff" />
          <Text style={{ fontWeight: "bold", marginLeft: 10, color: "#fff" }}>
            Editar
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteItem}>
        <View
          style={{
            backgroundColor: "#5d14a3",
            width: 140,
            borderRadius: 5,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Feather name="trash-2" size={20} color="#fff" />
          <Text style={{ fontWeight: "bold", marginLeft: 10, color: "#fff" }}>
            Eliminar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const deleteItem = async () => {
    await api.delete(`address/delete/${data._id}`);

    Alert.alert("Exclusão efetuada", "Registo excluido da base de dados");
    setModalVisible(false);
    loadAddress();
  };
  return (
    <>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View
          style={{
            backgroundColor: "#ddd",
            width: 400,
            height: 200,
            alignSelf: "center",
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#262626",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            O que deseja fazer com esse dado ?
          </Text>
          <Buttons />
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            height: 50,
            backgroundColor: "#eee",
            alignItems: "center",
            borderColor: "#ddd",
            borderWidth: 1,
            paddingLeft: 16,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#262626",
              marginRight: 5,
            }}
          >
            {data.typeAddress}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#262626",
              marginRight: 5,
            }}
          >
            {data.endereco}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#262626",
              marginRight: 5,
            }}
          >
            {data.numero}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#262626",
              marginRight: 5,
            }}
          >
            {data.bairro}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#262626",
              marginRight: 5,
            }}
          >
            {data.cep}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Item;
