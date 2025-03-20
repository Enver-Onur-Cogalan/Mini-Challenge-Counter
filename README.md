# React Native Counter App

## 📌 Project Overview
This is a simple **React Native Counter App** built using **Expo CLI**. The app consists of a button that increases the count value each time it is pressed.

## 🎯 Features
- Displays a **Count** value on the screen.
- Increases the count by **1** when the button is pressed.
- Styled using **React Native's `StyleSheet`** for a visually appealing UI.
- Uses **Expo CLI** for easy setup and development.

## 🚀 Installation & Setup
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone <https://github.com/Enver-Onur-Cogalan/Mini-Challenge-Counter/tree/main>
   cd counter-app
   ```

2. **Install dependencies (Make sure you have Expo installed globally):**
   ```sh
   npm install -g expo-cli
   npm install
   ```

3. **Start the project:**
   ```sh
   expo start
   ```
   - Press **"i"** to open in iOS Simulator.
   - Press **"a"** to open in Android Emulator.

## 📖 Usage
- When you open the app, you will see the **Count: 0** displayed.
- Press the **"Toggle Me"** button to increase the count.
- The count will increment by **1** on each press.

## 🔍 Code Explanation
The app is structured as follows:

### **Main File (`Counter.js` or `Counter.tsx`)**
```tsx
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
```

## 📌 Technologies Used
- **React Native**
- **Expo CLI**
- **JavaScript (ES6)**
- **React Hooks (`useState`)**

## 🤝 Contributing
If you want to contribute:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a **Pull Request**

---

## 📝 License
This project is **open-source** and free to use.

---

💡 **Made with ❤️ by Enver Onur Cogalan** 🚀
