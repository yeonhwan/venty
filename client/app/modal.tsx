import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ModalScreen() {
  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-text text-3xl font-bold">Modal</Text>
      <Link href="/" dismissTo className="mt-4 py-4">
        <Text className="text-primary text-base">Go to home screen</Text>
      </Link>
    </View>
  );
}
