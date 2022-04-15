import {View} from 'react-native';
import React from 'react';
import {Props__Row} from './types';
import Styles from './styles';

const Row = (props: Props__Row) => {
  return <View style={props.style ?? Styles.row}>{props.children}</View>;
};

export default Row;
