import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import back from "../images/back.jpg";

const MainScreen = ({ setMain, setCity }) => {
  const [inputCity, setInputCity] = useState("");

  const handlePress = () => {
    if (inputCity !== "") {
      setCity(inputCity.trim());
      setMain(false);
    } else {
      alert("Заповніть поле!");
    }
  };

  return (
    <ImageBackground source={back} style={styles.container}>
      <Text style={styles.title}>Погода</Text>
      <TextInput
        placeholder="Введіть місто"
        placeholderTextColor={"white"}
        style={styles.textInput}
        onChangeText={setInputCity}
        required
      ></TextInput>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Отримати погоду</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height:"100%",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
    marginBottom: 40,
  },
  text: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    fontSize: 16,
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 300,
    height: 40,
    marginBottom: 40,
    borderColor: "white",
    backgroundColor: "#008586",
    color: "white",
    fontWeight: 700,
  },
  button: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#24b186",
    borderColor: "white",
  },
  backgroundVideo:{
    height:400,
    width:200
  }
});

export default MainScreen;
