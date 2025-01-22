/**
 * @description 主程序入口文件
 * @author Pan
 * @since 25/01/21
 */

// 手势处理
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 页面视图
import HomeScreen from './screens/homeScreen';
import AtlasScreen from './screens/atlasScreen';
import AddScreen from './screens/addScreen';
import TimelineScreen from './screens/timelineScreen';
import SetupScreen from './screens/setupScreen';


const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Atlas" component={AtlasScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Timeline" component={TimelineScreen} />
        <Tab.Screen name="Setup" component={SetupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
