import React from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Imageslider from '../components/Imageslider';
import { Bodyparts } from '../components/Bodyparts';
const home = () => {
    return (
        <SafeAreaView className="bg-white flex-1 flex space-y-5" edges={['top']}>
            <StatusBar style="dark" />
            {/* {punchlines and avatar} */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{
                        fontSize: hp(4.5)
                    }} className="font-bold traking-wider text-neutral-700">READY TO</Text>
                    <Text style={{
                        fontSize: hp(4.5)
                    }} className="font-bold traking-wider text-rose-500">WORKOUT</Text>

                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image source={require('../assets/images/profile.webp')} style={{
                        height: hp(6.5),
                        width: hp(6.5)
                    }} className="rounded-full" />
                    <View className="bg-neutral-200 flex justify-center items-center rounded-full border-[3px] border-neutral-300" style={{
                        height: hp(5.5),
                        width: hp(5.5)
                    }}>
                        <Feather name="bell" size={hp(3.5)} color="gray" />
                    </View>
                </View>

            </View>
            <View>

                <Imageslider />
            </View>
            <View className="flex-1">
                <Bodyparts />
            </View>

        </SafeAreaView>
    )
}

export default home