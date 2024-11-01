import { View, Text } from 'react-native'
import React from 'react'
import CustomBUTTON from './components/CustomBUTTON'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center px-4 ">
      <Text className="text-xl font-bold">Wellcome</Text>

      <CustomBUTTON title="Get-Start" handlePress={()=> Push.router("/(auth)/signup")} containerSytle="mt-7"/>
    </View>
  )
}

export default index