import React from "react";
import { Box, Image, Text } from "native-base";
import { Friend } from "../../src/contexts/user/types";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";

// export default function FriendCard({ friend }: { friend: Friend }) {
export default function FriendCard({
  bigger,
  friend,
}: {
  bigger: boolean;
  friend: Friend;
}) {
  const navigation = useNavigation();
  const size = bigger ? 120 : 100;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(friend.phoneNumbers);
        Linking.openURL("tel:" + friend.phoneNumbers[0].number);
      }}
      onLongPress={() => {
        navigation.navigate("Friend", { id: friend.id });
      }}
      delayLongPress={500}
    >
      <Box overflow="hidden" mx="2.5" borderRadius="lg">
        <Image
          source={
            friend.image || {
              uri: "https://placebeard.it/100x100",
            }
          }
          w={size || 100}
          h={size || 100}
          alt="friend image"
        />
        <Text
          zIndex={2}
          position="absolute"
          bottom="0.5"
          left="1.5"
          fontWeight="bold"
          fontSize="lg"
          color="white"
        >
          {friend?.nickname || friend?.name}
        </Text>
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            width: size,
            height: size,
          }}
        />
      </Box>
    </TouchableOpacity>
  );
}