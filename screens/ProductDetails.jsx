import { View, Text } from "react-native";
import React, { useRef } from "react";
import { colors, defaultStyle } from "../styles/Styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-paper";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

// Define CarouselCardItem component here
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.url }}
        style={styles.image}
      />
    </View>
  );
};

const ProductDetails = ({ route: { params } }) => {
    console.log(params.id);
  const isCarousel = useRef(null);
  const images = [
    {
      id: "fasbhsa",
      url: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: "adhifjnf",
      url: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={({ item, index }) => <CarouselCardItem item={item} index={index} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250
  }
});

export default ProductDetails;
