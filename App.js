import { useState } from "react";
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);   // Starting state 0

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.countText}>Count: {count}</Text>
        <Button title='♠️ Click Me ♠️' onPress={increment} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    alignItems: 'center',
    gap: 20,
  },
  countText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333'
  },
});

export default Counter;
