import {
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Image
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/Styles";
import { Headline, Searchbar } from "react-native-paper";

const SearchModal = ({
  searchQuerry,
  setActiveSearch,
  setSearchQuerry,
  products = [],
}) => {
  const navigate = useNavigation();
  const backAction = ()=>{
    setSearchQuerry("");
    setActiveSearch(false);
    return true
  }

  useEffect(()=>{
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () => {
        BackHandler.removeEventListener("hardwareBackPress", backAction)
    }
  },[])
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: colors.color2,
        top: 0,
        zIndex: 100,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* <Text>SearchModal</Text> */}
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(e) => setSearchQuerry(e)}
          value={searchQuerry}
          style={{
            marginTop: 20,
          }}
        />
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 10,
            }}
          >
            {products.map((i) => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.uri}
                name={i.name}
                price={i.price}
                handler={
                    ()=> navigate.navigate("productdetails", {id:i._id})
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem = ({price, name, imgSrc, handler }) => (
    <TouchableOpacity onPress={handler}>
        <View style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: colors.color2,
            elevation: 5,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginVertical: 30,
        }}>
            <Image source={{
                uri: imgSrc,
            }}
            style={{
                width: 80,
                height: 80,
                position: "absolute",
                resizeMode: "contain",
                top: -15,
                left: 10,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
            }}
            />
            <View style={{
                width: "80%",
                paddingHorizontal: 30,
            }}>
                <Text numberOfLines={1}>{name}</Text>
                <Headline 
                numberOfLines={1}
                style={{
                    fontWeight: "900"
                }}>${price}</Headline>


            </View>
        </View>
    </TouchableOpacity>
)

export default SearchModal;
