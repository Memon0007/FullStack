import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Customfiled from '../components/Customfiled'
import CustomBUTTON from '../components/CustomBUTTON'

const signin = () => {
  return (
    <ScrollView>
    <View className="flex-1 items-center justify-center px-4">
      <Text className="text-lg font-bold">signin</Text>

      <Customfiled label="email" containerStyle="mt-7"/>
      <Customfiled lable="password" containerStyle="mt-7"/>

      <CustomBUTTON title="signin"/>
    </View>
    </ScrollView>
  )
}

export default signin