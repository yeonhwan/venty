import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="bg-red-500 rounded-2xl px-6 py-4 mb-4">
        <Text className="text-white text-xl font-bold">Uniwind Test</Text>
      </View>
      <Text className="text-gray-500 text-sm">Tailwind classes working!</Text>
    </View>
  );
}
