import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import Item from "../../components/Item";
import api from "../../services/api";

const List = () => {
  const [list, setList] = useState([]);

  const loadAddress = async () => {
    const response = await api.get("address");

    setList(response.data.address);
  };

  useEffect(() => {
    loadAddress();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {list.length <= 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#888", fontSize: 30, fontWeight: "bold" }}>
            Sem Registros...
          </Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Item loadAddress={loadAddress} data={item} />
          )}
        />
      )}
    </View>
  );
};

export default List;
