import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import MyPage from "./screens/Mypage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Coupon from "./screens/Coupon";
import Share from "./screens/Share";
import { WithLocalSvg } from "react-native-svg/css";
import Login from "./screens/Login";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  홈: undefined;
  쿠폰: undefined;
  공유: undefined;
  MY: undefined;
  Bottom: undefined;
};

const BottomTab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

export function Bottom() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <WithLocalSvg
                asset={require("./assets/images/ActiveHome.svg")}
                width={size}
                height={size}
              />
            ) : (
              <WithLocalSvg
                asset={require("./assets/images/home.svg")}
                width={size}
                height={size}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="쿠폰"
        component={Coupon}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <WithLocalSvg
                asset={require("./assets/images/ActiveCoupon.svg")}
                width={size}
                height={size}
              />
            ) : (
              <WithLocalSvg
                asset={require("./assets/images/coupon.svg")}
                width={size}
                height={size}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="공유"
        component={Share}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <WithLocalSvg
                asset={require("./assets/images/ActiveShare.svg")}
                width={size}
                height={size}
              />
            ) : (
              <WithLocalSvg
                asset={require("./assets/images/share.svg")}
                width={size}
                height={size}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="MY"
        component={MyPage}
        options={{
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <WithLocalSvg
                asset={require("./assets/images/ActiveMypage.svg")}
                width={size}
                height={size}
              />
            ) : (
              <WithLocalSvg
                asset={require("./assets/images/mypage.svg")}
                width={size}
                height={size}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom"
            component={Bottom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
