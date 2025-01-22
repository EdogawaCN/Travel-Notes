/**
 * @description 首页
 * @author pan
 * @since 25/01/22
 */
import s from './index.style.ts';
import React from 'react';
import {View} from 'react-native';
import {Text} from '@react-navigation/elements';

export default function HomeScreen (prop: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={s.container}>
      <Text>
        Home Screen
      </Text>
    </View>
  );
}
