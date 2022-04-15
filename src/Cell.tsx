import {View} from 'react-native';
import React from 'react';
import {Props__Cell} from './types';
import Styles from './styles';

const Cell = (props: Props__Cell) => {
  return (
    <View
      style={
        props.style ??
        (props.vertical ? Styles.cellFlex : Styles.cellFlexHorizontal)
      }>
      {props.children}
    </View>
  );
};

export default Cell;
