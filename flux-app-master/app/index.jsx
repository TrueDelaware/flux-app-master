import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Flux</Text>
      <StatusBar style="auto" />
      <Link href="/login" style={{ color: "blue" }}>
        Go to Log In
      </Link>
    </View>
  );
}
