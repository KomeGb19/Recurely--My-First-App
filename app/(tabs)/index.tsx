import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-4">
      <Text className="text-xl font-bold text-white bg-pink-500 p-4 rounded-lg">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 text-white bg-primary p-4 rounded-lg underline"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 text-white bg-primary p-4 rounded-lg underline"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 text-white bg-primary p-4 rounded-lg underline"
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
