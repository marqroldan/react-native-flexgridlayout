import {View} from 'react-native';
import React from 'react';
import {Props__Column} from './types';
import Styles from './styles';

const Column = (props: Props__Column) => {
  return <View style={props.style ?? Styles.column}>{props.children}</View>;
};

export default Column;
