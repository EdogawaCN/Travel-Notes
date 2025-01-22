/**
 * @description 主程序入口文件
 * @author pan
 * @since 25/01/21
 */


// 手势处理
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

function HomeScreen (prop: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={style.container}>
      <Text>
        Home Screen
      </Text>
      <Button title="跳转到详情页" onPress={() => prop.navigation.navigate('Details')} />
    </View>
  );
}
function ProfileScreen (prop: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={style.container}>
      <Text>
        Profile Screen
      </Text>
      <Button title="返回首页" onPress={() => prop.navigation.navigate('Home')} />
    </View>
  );
}
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
