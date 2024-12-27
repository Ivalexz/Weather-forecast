import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import arrow from "../images/arrow.png";

const ForecastScreen = ({ city, setMain }) => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  const myApi = "b06bb119f13e58095862e23802b20627";

  useEffect(() => {
    const getWeather = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&lang=ua`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.main) {
            setForecast(data);
          } else {
            alert("Невірний ввід");
            setMain(true);
          }
          setLoading(false);
        });
    };
    void getWeather();
  }, []);

  return (
    <LinearGradient colors={["#010810", "#54878B"]} style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <View>
          <View style={styles.flex}>
            <Pressable
              onPress={() => setMain(true)}
              style={styles.arrowContainer}
            >
              <Image source={arrow} style={styles.arrow} />
            </Pressable>
            <Text style={styles.city}>{forecast.name}</Text>
          </View>
          <View style={styles.objects}>
            <Text style={styles.temp}>
              {Math.round(parseFloat(forecast.main.temp) - 273.15)}°
            </Text>
            <Text style={styles.description}>
              {forecast.weather[0].description}
            </Text>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
              }}
              style={{ width: 150, height: 150 }}
            />
            <View style={styles.itemsFlex}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  Вологість: {forecast.main.humidity}%
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.text}>
                  Швидкість вітру: {forecast.wind.speed} м/с
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  city: {
    position: "absolute",
    textAlign: "right",
    top: 55,
    right: 20,
    fontSize: 35,
    width: 250,
    color: "white",
  },
  arrow: {
    position: "absolute",
    top: 30,
    left: 10,
    transform: [{ scaleX: -1 }],
    width: 50,
    height: 40,
  },
  arrowContainer: {
    position: "absolute",
    top: 30,
    left: 10,
    width: 50,
    height: 40,
  },
  objects: {
    marginVertical: "53%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    width: 150,
    marginLeft: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 80,
    color: "white",
  },
  description: {
    fontSize: 25,
    color: "white",
    width: 200,
    textAlign: "center",
    marginBottom: -10,
  },
  itemsFlex: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  item: {
    paddingHorizontal:10,
    width: 145,
    height: 100,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
  },
  loading:{
    color: "white",
    fontSize: 30,
    fontWeight:"bold",
    textAlign: "center",
    marginTop:"100%"
  }
});

export default ForecastScreen;
