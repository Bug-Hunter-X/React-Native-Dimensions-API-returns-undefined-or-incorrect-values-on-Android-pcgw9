The solution uses the `onLayout` event of a `View` component to get the layout dimensions reliably. This approach avoids the inconsistencies of `Dimensions.get('window')`.

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [layout, setLayout] = useState(null);

  const handleLayout = event => {
    setLayout(event.nativeEvent.layout);
  };

  return (
    <View onLayout={handleLayout} style={styles.container}>
      {layout ? (
        <Text>Width: {layout.width}, Height: {layout.height}</Text>
      ) : (
        <Text>Loading dimensions...</Text>
      )}
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```