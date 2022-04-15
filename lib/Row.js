import { View } from 'react-native';
import React from 'react';
import Styles from './styles';
var Row = function (props) {
    var _a;
    return <View style={(_a = props.style) !== null && _a !== void 0 ? _a : Styles.row}>{props.children}</View>;
};
export default Row;
