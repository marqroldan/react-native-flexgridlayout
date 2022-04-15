import {View, ViewStyle} from 'react-native';
import React from 'react';
import {Props__Gap} from './types';

const _GapCache = {} as Record<string, ViewStyle>;
const Gap = (props: Props__Gap) => {
  const finalGap = props.gap || 0;
  if (!_GapCache[finalGap]) {
    _GapCache[finalGap] = {
      height: finalGap,
      width: finalGap,
    };
  }

  const gapStyle = _GapCache[finalGap];
  return <View style={gapStyle} />;
};

export default Gap;
