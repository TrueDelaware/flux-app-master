import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import { styled } from "nativewind";

const StyledView = styled(View);

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center">
          <StyledView
            className="container rounded-full bg-primary h-[150] 
          w-[160] flex justify-center items-center mt-10 mb-10"
          >
            <Text className="text-center text-5xl text-white font-semibold">
              FLUX
            </Text>
          </StyledView>

          <StyledView
            className="container rounded-lg h-80 px-6 w-[350] 
          justify-right bg-secondary-100 items-center"
          >
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
              placeholder="Enter your email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              placeholder="Password"
            />

            <TouchableOpacity className="bg-primary rounded-3xl w-[200] h-[55] p-4 mt-5 items-center">
              <Text className="text-white text-center text-lg font-semibold">
                Login
              </Text>
            </TouchableOpacity>
          </StyledView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogIn;
