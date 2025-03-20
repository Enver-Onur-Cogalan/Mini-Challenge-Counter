import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);   // Starting state 0

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.countText}>Count: {count}</Text>

        <TouchableOpacity style={styles.Button} onPress={increment}>
          <Text style={styles.buttonText}>Toggle Me</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba (255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 10,
    gap: 20,
  },
  countText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  Button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  ButtonText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Counter;
