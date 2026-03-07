import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet
} from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Aplicativo React Native</Text>

      {/* Campo de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
      />

      {/* Botão */}
      <View style={styles.buttonContainer}>
        <Button
          title="Enviar"
          color="#dc143c"
          onPress={() => alert("Botão pressionado")}
        />
      </View>

      {/* Indicador de carregamento */}
      <ActivityIndicator size="large" color="#0000ff" />

      {/* Imagem local */}
      <Text style={styles.subtitle}>Cristo Água Da Vida</Text>
      <Image
        source={require("../assets/images/Cristo.jpg")}
        style={styles.image}
      />

      {/* Imagem remota */}
      <Text style={styles.subtitle}>Queime o medo, renasça em força</Text>
      <Image
        source={require("../assets/images/fenix.jpg")}
        style={styles.image}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20
  },

  title: {
    fontSize: 24,
    fontWeight: "bold"
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600"
  },

  text: {
    fontSize: 16,
    textAlign: "center"
  },

  input: {
    width: "100%",
    color: "#18181a",
    borderWidth: 1,
    borderColor: "#e70f62",
    borderRadius: 5,
    padding: 10
  },

  buttonContainer: {
    width: "100%",
    color: "#dc143c"
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: "contain"
  }

});