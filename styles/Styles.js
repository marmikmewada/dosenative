import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
    color1: "#c70049",
    color1_light: "rgba(227, 25, 99)",
    color1_light2: "rgba(199, 0, 73, 0.8)",
    color2: "white",
    color3: "#2d2d2d",
    color4: "transparent",
    color5: "#f2f2f2",
    color6: "#f7f7f7"

};

export const defaultStyle = StyleSheet.create({
    padding: 35,
    paddingTop: Platform.OS === "android" ? StatusBar. currentHeight : 0,
    flex: 1,
    backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
    height:50,
    backgroundColor: colors.color2,
    marginVertical: 10,
    marginHorizontal : 20
});