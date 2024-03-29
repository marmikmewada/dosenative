import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/Styles"; // Ensure correct import path and capitalization
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  name,
  price,
  image,
  id,
  addToCartHandler,
  i,
  navigate,
}) => {
  //   console.log(image);
  return (
    <TouchableOpacity
    activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          // Corrected 'styles' to 'style'
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
          height: 400,
        }}
      >
        <Image
          source={{ uri: image }} // Corrected the way image URI is accessed
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: "50",
            top: "105",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
            gap: 1,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: 300,
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            ${price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: "100%",
          }}
        >
          <Button
            onPress={() => addToCartHandler(id, stock)}
            textColor={i % 2 === 0 ? colors.color1 : colors.color2}
          >
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
