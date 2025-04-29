import { StyleSheet, Text, View } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Lara",
    cargo: "Aluna"
},
  {
    id: 2,
    nome: "Darlla",
    cargo: "Aluna" 
}
];

export default function Index() {
  return (
    <View
     style={style.container}
    >
      {
        usuarios.map(item => (<Text style= {{ fontSize: 20}}>{item.nome}</Text>))
      }
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
