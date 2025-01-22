/**
 * @description 图谱
 * @author Pan
 * @since 25/01/22
 */

import s from './index.style.ts';
import React from 'react';
import {View} from 'react-native';
import {Text} from '@react-navigation/elements';

export default function AtlasScreen (prop: { navigation: { navigate: (arg0: string) => void; }; }) {
  return (
    <View style={s.container}>
      <Text>
        Atlas Screen
      </Text>
    </View>
  );
}
