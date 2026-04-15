import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4">
      <Text className="text-2xl font-bold">TEST</Text>
      <Button onPress={() => alert("pressed!")}>
        <Text>Default Button</Text>
      </Button>
      <Button variant="destructive" onPress={() => alert("destructive!")}>
        <Text>Destructive</Text>
      </Button>
      <Button variant="outline" onPress={() => alert("outline!")}>
        <Text>Outline</Text>
      </Button>
      <Button variant="ghost" onPress={() => alert("ghost!")}>
        <Text>Ghost</Text>
      </Button>
    </View>
  );
}
