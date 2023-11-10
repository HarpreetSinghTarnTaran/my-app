import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  value,name
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        name={name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 6,
    // margin:10,
    marginBottom: 24,

    borderRadius: 4,
  },
});

export default Input;
