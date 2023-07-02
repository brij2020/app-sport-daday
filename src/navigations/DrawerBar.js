
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useWindowDimensions, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IntroRoute from './Navigator';
// import StackNavgator from "../StackNavigator";
import SidebarMenu from "../Screens/SidebarMenu";

const Drawer1 = createDrawerNavigator();

function DrawerBar(props) {
  const { navigation } = props

  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
      <Drawer1.Navigator
        // drawerContentOptions={{
        //   activeTintColor: "#e91e63" ,        
        //   itemStyle: { marginVertical: 5 },
        // }}
        drawerType={dimensions.width >= 768 ? "front" : "front"}
        drawerStyle={isLargeScreen ? { width: '70%' } : { width: '70%' }}
        drawerContent={(props) => <SidebarMenu {...props} />}
        // contentComponent: props => <SidebarMenu {...props} />


      >
        <Drawer1.Screen
          name="IntroRoute"
          // options={{ drawerLabel: "First page for new user" }}
          component={IntroRoute}
          options={{
            // drawerLabel: 'First for new',
            headerShown: false,
            // swipeEnabled: false
          }}
        />
        
      </Drawer1.Navigator>
    </NavigationContainer>
  );
}
export default DrawerBar;
