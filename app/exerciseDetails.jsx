import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useLocalSearchParams, useRouter } from 'expo-router'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
const exerciseDetails = () => {
    const router = useRouter();
    const item = useLocalSearchParams();
    // console.log('got items', item);
    return (
        <View className="flex flex-1">

            <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit='cover'
                    style={{ width: wp(100), height: wp(100) }}
                    className="rounded-[40px]"
                />

            </View>
            <TouchableOpacity style={{
                width: hp(5.5),
                height: hp(5.5),
                marginTop: hp(7)
            }} className="absolute bg-rose-400 mx-4 flex justify-center pr-1 items-center rounded-full" onPress={() => router.back()}>
                <AntDesign name="caretleft" size={hp(4)} color="white" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }} showsVerticalScrollIndicator={false} className="mx-4 space-y-2 mt-3">
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()} style={{ fontSize: hp(3.5) }} className="font-semibold tracking-wide text-neutral-800">{item?.name}
                </Animated.Text>


                <Animated.Text
                    entering={FadeInDown.delay(100).duration(300).springify()} style={{ fontSize: hp(2) }} className="tracking-wide text-neutral-700">
                    Equipment
                    <Text className="font-bold text-neutral-800"> {item?.equipment}</Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(200).duration(300).springify()} style={{ fontSize: hp(2) }} className="tracking-wide text-neutral-800">
                    Secondary Muscles
                    <Text className="font-bold text-neutral-700"> {item?.secondaryMuscles}</Text>
                </Animated.Text>


                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()} style={{ fontSize: hp(2) }} className="tracking-wide text-neutral-800">
                    Target
                    <Text className="font-bold text-neutral-700"> {item?.target}</Text>
                </Animated.Text>


                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()} style={{ fontSize: hp(3) }} className="tracking-wide text-neutral-800">
                    Instructions
                </Animated.Text>
                {
                    (item.instructions)?.split(',').map((ins, index) => {
                        return (
                            <Animated.Text
                                entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()} key={ins} style={{ fontSize: hp(1.7) }}
                                className="text-neutral-800"
                            >
                                {ins}

                            </Animated.Text>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default exerciseDetails