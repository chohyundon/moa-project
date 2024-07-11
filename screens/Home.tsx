import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { WithLocalSvg } from "react-native-svg/css";
import { Colors, Size } from "../style/style";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topContainer}>
        <WithLocalSvg
          asset={require("../assets/images/MainLogo.svg")}
          style={styles.image}
        />
        <View style={styles.hideLogo}>
          <WithLocalSvg
            asset={require("../assets/images/GrouphideLogo.svg")}
            style={styles.image}
          />
          <WithLocalSvg
            asset={require("../assets/images/GrouphideBottomLogo.svg")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.topText}>쿠폰이 없습니다</Text>
        <Text style={styles.bottomText}>쿠폰을 추가해보세요!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.myCoupon}>내 쿠폰</Text>
        <View style={styles.couponContainer}>
          <Text style={styles.couponTopText}>쿠폰이 없습니다</Text>
          <Text style={styles.couponBottomText}>쿠폰을 추가해보세요!</Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>쿠폰 추가하기</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContainer: {
    height: "45%",
    backgroundColor: Colors.MoaCarrot.carrot700,
    zIndex: 10,
  },

  image: {
    paddingTop: deviceWidth < 430 ? 140 : 154,
    marginHorizontal: 20,
  },

  hideLogo: {
    marginLeft: deviceWidth < 430 ? "48%" : "52%",
  },

  centerContainer: {
    backgroundColor: Colors.MoaGray.primaryWhite,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "20%",
    borderRadius: 6,
    zIndex: 10,
    width: "90%",
    position: "absolute",
    top: "40%",
    left: "5%",
    shadowColor: Colors.MoaGray.gray400,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
  },

  topText: {
    color: Colors.MoaGray.gray500,
    fontSize: Size.body2Medium16,
  },
  bottomText: {
    color: Colors.MoaGray.gray400,
    fontSize: Size.body3Medium14,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: "center",
  },

  myCoupon: {
    marginLeft: 25,
    fontSize: Size.title3Bold16,
    fontWeight: "bold",
  },

  couponContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    top: "15%",
    gap: 6,
  },

  couponTopText: {
    color: Colors.MoaGray.gray500,
    fontSize: Size.body2Medium16,
  },
  couponBottomText: {
    color: Colors.MoaGray.gray400,
    fontSize: Size.body3Medium14,
  },

  button: {
    backgroundColor: Colors.MoaCarrot.carrot700,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: Size.body3Medium14,
  },
});
