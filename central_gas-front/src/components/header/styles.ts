import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles/colors";

const screenWidth = Dimensions.get('window').width;
const maxWidth = screenWidth - 80;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#009240",
  },
  navbar: {
    flex: 1,
    backgroundColor: "#2B4C2F",

  },
  titlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,

  },
  spaceLogo:{
    maxWidth: maxWidth,
  },
  navItem: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  navSeparator: {
    color: "#FFFFFF",
    fontSize: 20,
    marginHorizontal: 2,
    fontWeight: "900",
  },
  logoContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    right: 0,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: colors.gray[100],
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});