import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WithLocalSvg } from "react-native-svg/css";
import { Colors, Size } from "../style/style";
import { StatusBar } from "expo-status-bar";
import { Switch } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function MyPage() {
  const [dayOpen, setDayOpen] = useState(false);
  const [dayValue, setDayValue] = useState(null);
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeValue, setTimeValue] = useState(null);

  const [dayItems, setDayItems] = useState([
    { label: "D-5", value: "1" },
    { label: "D-4", value: "2" },
    { label: "D-3", value: "3" },
    { label: "D-2", value: "4" },
    { label: "D-1", value: "5" },
  ]);

  const generateTimeItems = () => {
    const times = [];
    for (let hour = 10; hour <= 23; hour++) {
      const label = `${hour < 10 ? `0${hour}` : hour}:00`;
      times.push({ label, value: label });
    }
    times.push({ label: "00:00", value: "00:00" });
    return times;
  };

  const [times, setTimes] = useState(generateTimeItems());

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <View style={styles.headerText}>
          <Text>MY</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <WithLocalSvg asset={require("../assets/images/dummyImage.svg")} />
            <WithLocalSvg
              asset={require("../assets/images/edit.svg")}
              style={styles.edit}
            />
            <Text style={styles.profileText}>김송하</Text>
          </View>
          <View style={styles.couponContainer}>
            <View style={styles.couponBox}>
              <Text style={styles.couponText}>내 쿠폰</Text>
              <Text style={styles.couponNum}>16개</Text>
            </View>
            <View style={styles.couponBox}>
              <Text style={styles.couponText}>사용가능 쿠폰</Text>
              <Text style={styles.couponNum}>10개</Text>
            </View>
            <View style={styles.couponBox}>
              <Text style={styles.couponText}>사용한 쿠폰</Text>
              <Text style={styles.couponNum}>6개</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.pushContainer}>
            <Text>푸시알림</Text>
            <Switch />
          </View>
          <View style={styles.dropDownContainer}>
            <DropDownPicker
              open={dayOpen}
              value={dayValue}
              items={dayItems}
              setOpen={setDayOpen}
              setValue={setDayValue}
              setItems={setDayItems}
              style={styles.dropDown}
              containerStyle={styles.dropDownContainerStyle}
              placeholder="D-5"
              dropDownContainerStyle={{ maxHeight: 150 }}
            />
            <DropDownPicker
              open={timeOpen}
              value={timeValue}
              items={times}
              setOpen={setTimeOpen}
              setValue={setTimeValue}
              setItems={setTimes}
              style={styles.dropDown}
              containerStyle={styles.dropDownContainerStyle}
              placeholder="10:00"
              maxHeight={200}
              dropDownContainerStyle={{ maxHeight: 150 }}
              listMode="SCROLLVIEW"
            />
          </View>
        </View>
        <View style={styles.containers}>
          <Text>고객센터</Text>
        </View>
        <View style={styles.containers}>
          <Text>로그아웃</Text>
        </View>
        <View style={styles.containers}>
          <Text>회원탈퇴</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 10,
    backgroundColor: "white",
  },

  image: {
    width: 30,
    height: 30,
  },

  headerText: {
    fontSize: Size.body2Medium16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderColor: Colors.MoaGray.gray100,
    height: 30,
  },

  profileContainer: {
    top: 20,
    height: 210,
    borderBottomWidth: 6,
    borderColor: Colors.MoaGray.gray100,
  },

  profile: {
    display: "flex",
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  edit: {
    position: "absolute",
    top: 40,
    left: 40,
  },

  profileText: {
    fontSize: Size.title2Bold18,
    fontWeight: "bold",
  },

  couponContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
  },

  couponBox: {
    top: 20,
    width: 125,
    height: 80,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.MoaGray.gray200,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: Colors.MoaGray.gray200,
    shadowOpacity: 0.9,
    shadowRadius: 3.85,
  },

  couponText: {
    color: Colors.MoaGray.gray600,
  },

  couponNum: {
    color: Colors.MoaCarrot.carrot700,
    fontSize: Size.body1Medium18,
  },

  infoContainer: {
    top: 10,
    borderBlockColor: Colors.MoaGray.gray100,
    borderBottomWidth: 2,
    zIndex: 10,
  },

  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  dropDownContainerStyle: {
    flex: 0.3,
  },

  dropDown: {
    borderWidth: 0,
  },

  pushContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  containers: {
    top: 10,
    display: "flex",
    justifyContent: "center",
    borderBlockColor: Colors.MoaGray.gray100,
    borderBottomWidth: 2,
    height: "15%",
    paddingLeft: 20,
  },
});
