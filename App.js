import Home from "./screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import Groups from "./screens/Groups";
import Profile from "./screens/Profile";
import Portfolio from "./screens/Portfolio";
import { SvgXml } from "react-native-svg";
import { PortfolioIcon, PortfolioIconActive, ProfileIcon, ProfileIconActive, groupIcon, groupIconActive, homeIcon, homeIconActive } from "./assets/Icons";



const Tab = createBottomTabNavigator();



export default function App() {
  // const state = useNavigationState((state) => state)
  // console.log(state.index)

  return (
    <>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'rgba(2 79 111 / 1)',
          tabBarInactiveTintColor: 'rgba(84 104 129 / .5)',
          tabBarStyle: { height: 60, paddingBottom: 5 },
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 13}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? homeIconActive : homeIcon} width={20} height={20} />)}}/>
        <Tab.Screen name="Portfolio" component={Portfolio} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 13}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? PortfolioIconActive : PortfolioIcon} width={20} height={20} />)}} />
        <Tab.Screen name="Groups" component={Groups} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 13}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? groupIconActive : groupIcon} width={20} height={20} />)}}/>
        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabelStyle: {fontWeight: '500', fontSize: 13}, tabBarIcon: ({focused}) => (<SvgXml xml={focused ? ProfileIconActive : ProfileIcon} width={20} height={20} />)}} />
        {/* <Tab.Screen name="Settings" component={Settings} /> */}
      </Tab.Navigator>
    </NavigationContainer>
      
    </>
  );
}

