import { View } from 'react-native';
import React from 'react';
var _GapCache = {};
var Gap = function (props) {
    var finalGap = props.gap || 0;
    if (!_GapCache[finalGap]) {
        _GapCache[finalGap] = {
            height: finalGap,
            width: finalGap
        };
    }
    var gapStyle = _GapCache[finalGap];
    return <View style={gapStyle}/>;
};
export default Gap;
