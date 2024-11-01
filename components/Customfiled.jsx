import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Customfiled = ({lable, containerStyle}) => {
  return (
    <View className="flex space-y-4">
      <Text>{lable}</Text>
      <View className="h-12 w-full  bg-neutral-200  boder border-neutral-400 justify-center">
        <TextInput className="text-base" onChangeText={value}/>
      </View>
    </View>
  )
}

export default Customfiled