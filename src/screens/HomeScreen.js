import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../assets/colors/color";

const w = Dimensions.get("window").width;

// 0.99
// 1.69
// 1.99

const HomeScreen = () => {
  const [canPrice, setCanPrice] = useState({
    0: "0.99",
    1: "1.69",
    2: "1.99",
  });
  const [selected, setSelected] = useState(1);
  const [size, setSize] = useState({
    0: "S",
    1: "M",
    2: "L",
  });

  const CanItem = ({ id }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelected(id)}
        style={[styles.imgContainer, selected == id && styles.selected]}
      >
        <ImageBackground
          resizeMode="contain"
          style={[
            styles.imgCan,
            selected == id && { tintColor: Colors.main_bold },
          ]}
          source={require("../assets/images/Can.png")}
        >
          <Text style={styles.imgText}>{size[id]}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundOval} />
      <View style={styles.can}>
        <Image
          style={styles.pepsi}
          resizeMode="contain"
          source={require("../assets/images/pepsi.png")}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>Classic Diet Pepsi</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          adipisci delectus doloremque, assumenda corrupti, quod perferendis
          consequatur obcaecati perspiciatis nihil illum iure. Maxime eaque
          illum eum adipisci, quis perferendis,
        </Text>
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.price}>$ {canPrice[selected]}</Text>
          </View>
          <View style={styles.sizeContainer}>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <CanItem id={i} key={i} />
              ))}

            {/* <CanItem size="M" selected />
            <CanItem size="L" /> */}
          </View>
        </View>

        <TouchableOpacity style={styles.btnBuyNow}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  backgroundOval: {
    backgroundColor: Colors.gray,
    width: w + w / 2,
    height: w + w / 2,
    borderRadius: w + w / 2,
    alignSelf: "center",
    top: -w * 0.9,
    position: "absolute",
  },
  can: {
    alignItems: "center",
    marginTop: w / 6,
  },
  itemContainer: {
    padding: 20,
    // marginTop: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    lineHeight: 24,
    fontWeight: "400",
    marginTop: 5,
    color: Colors.white,
  },
  priceContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
  imgCan: {
    width: 35,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    tintColor: Colors.gray,
  },
  imgContainer: {
    backgroundColor: Colors.gray1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 1,
    padding: 10,
    borderRadius: 8,
  },
  imgText: {
    fontSize: 15,
  },
  sizeContainer: {
    flexDirection: "row",
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.main_bold,
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 15,
    backgroundColor: Colors.button_fill,
  },
  btnBuyNow: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 30,
    marginTop: 15,
  },
  btnText: {
    fontSize: 20,
    color: Colors.main_bold,
    textAlign: "center",
  },
});
