import React from 'react';
import { View } from 'react-native';

export default ({
  style, justifyContent, alignItems, children
}) => (
  <View
    style={{
      ...style,
      flex: 1,
      justifyContent,
      flexDirection: 'row',
      alignItems
    }}
  >
    {children}
  </View>
);
