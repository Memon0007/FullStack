import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBUTTON = ({title, containerSytle}) => {
  return (
    <TouchableOpacity className=" bg-black h-12 w-full items-center justify-center rounded-full  ">
    <Text className="text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBUTTON