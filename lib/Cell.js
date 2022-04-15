import { View } from 'react-native';
import React from 'react';
import Styles from './styles';
var Cell = function (props) {
    var _a;
    return (<View style={(_a = props.style) !== null && _a !== void 0 ? _a : (props.vertical ? Styles.cellFlex : Styles.cellFlexHorizontal)}>
      {props.children}
    </View>);
};
export default Cell;
