import { Text, View } from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-light-200 font-bold">Welcomes</Text>
        <Link href="/onboarding">On Boarding</Link>
        <Link href="/movie/avengers">Avenger Movie</Link>
    </View>
  );
}
