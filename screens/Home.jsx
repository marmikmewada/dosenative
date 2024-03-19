import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/Styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
const Home = () => {
  const navigate = useNavigation();
  const categories = [
    { category: "Nice", _id: "afdsffdafs" },
    { category: "Men", _id: "fajkkfafsa" },
    { category: "Women", _id: "fdsjbkdas" },
    { category: "kids", _id: "kifanbfhds" },
    { category: "nannie", _id: "ahfbkdfs" },
    { category: "papou", _id: "nnfjnfjb" },
  ];
  const products = [
    {
      price: 1100,
      name: "Oldest civilization coin - brass",
      _id: "asjndjfj1",
      images: [
        {
          uri: "https://images.pexels.com/photos/3263669/pexels-photo-3263669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          uri: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      stock: 10,
    },
    {
      price: 1200,
      name: "Sample Product 2",
      _id: "asjndjfj2",
      images: [
        {
          uri: "https://images.pexels.com/photos/3263669/pexels-photo-3263669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          uri: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      stock: 5,
    },
    {
      price: 1300,
      name: "Sample Product 3",
      _id: "asjndjfj3",
      images: [
        {
          uri: "https://images.pexels.com/photos/3263669/pexels-photo-3263669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          uri: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      stock: 8,
    },
    {
      price: 1400,
      name: "Sample Product 4",
      _id: "asjndjfj4",
      images: [
        {
          uri: "https://images.pexels.com/photos/3263669/pexels-photo-3263669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          uri: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      stock: 12,
    },
    {
      price: 1500,
      name: "Sample Product 5",
      _id: "asjndjfj5",
      images: [
        {
          uri: "https://images.pexels.com/photos/3263669/pexels-photo-3263669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          uri: "https://images.pexels.com/photos/7195267/pexels-photo-7195267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      stock: 3,
    },
  ];

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuerry, setSearchQuerry] = useState("");
  const categoryButtonHandler = async (id) => {
    const selectedCategory = categories.find((item) => item._id === id);
    // console.log(selectedCategory);
    setCategory(id);
  };
  const addToCartHandler = (id) => {
    console.log("adding to cart", id);
  };
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuerry={searchQuerry}
          setSearchQuerry={setSearchQuerry}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        {/* header  */}
        <Header />

        {/* heading div  */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* heading  */}
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          {/* searchbar  */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* categories button  */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
        {/* products  */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* <ProductCard/> */}
            {products.map(
              (item, index) => (
                // console.log(item.images[0]?.uri),
                (
                  <ProductCard
                    stock={item.stock}
                    price={item.price}
                    name={item.name}
                    image={item.images[0]?.uri}
                    addToCartHandler={addToCartHandler}
                    id={item._id}
                    key={item._id}
                    i={index}
                    navigate={navigate}
                  />
                )
              )
            )}
          </ScrollView>
        </View>
      </View>
        <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
