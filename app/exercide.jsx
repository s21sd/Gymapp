import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchBodypart } from '../api/exerciseDb';
import { demoExercises } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExereciseDb from '../components/ExereciseList';
import ExereciseList from '../components/ExereciseList';
import { ScrollView } from 'react-native-virtualized-view';
const exercide = () => {
    const [exercises, serExercies] = useState([]);
    const router = useRouter();
    const item = useLocalSearchParams();
    // console.log('got items', item);
    useEffect(() => {
        if (item) {
        getExercise(item.name);
        }
    }, [item]);
    const getExercise = async (bodyPart) => {
        const data = await fetchBodypart(bodyPart);
        serExercies(data);
        // console.log(data);
    }
    return (
        <ScrollView>
            <StatusBar style="light" />
            <Image source={item.image} style={{
                width: wp(100),
                height: hp(45)
            }} className="rounded-b-[45px]" />
            <TouchableOpacity style={{
                width: hp(5.5),
                height: hp(5.5),
                marginTop: hp(7)
            }} className="absolute bg-rose-400 mx-4 flex justify-center pr-1 items-center rounded-full" onPress={() => router.back()}>
                <AntDesign name="caretleft" size={hp(4)} color="white" />
            </TouchableOpacity>

            {/* {exercide} */}
            <View className="mx-4 mt-4 space-y-3">
                <Text style={{ fontSize: hp(3) }} className="font-bold text-neutral-700">{item.name} exercises </Text>

                <View className="mb-10">
                    <ExereciseList data={exercises} />
                </View>
            </View>
        </ScrollView>
    )
}

export default exercide