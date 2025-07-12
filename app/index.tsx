import { offers, images } from "@/constants";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import cn from "clsx";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <View className="mb-4 px-4">
              <Pressable
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row",
                  "rounded-xl items-center justify-between p-3"
                )}
                style={{ backgroundColor: item.color }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="w-1/2 h-40">
                      <Image
                        source={item.image}
                        className="w-full h-full"
                        resizeMode="contain"
                      />
                    </View>

                    <View
                      className={cn(
                        "offer-card_info w-1/2 justify-between",
                        isEven ? "pl-10 items-end" : "pr-10 items-start"
                      )}
                    >
                      <Text className="h1-bold text-white leading-tight mb-3">
                        {item.title}
                      </Text>

                      <Image
                        source={images.arrowRight}
                        className="w-6 h-6 tint-white"
                        resizeMode="contain"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
