import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Customfiled from '../components/Customfiled'
import CustomBUTTON from '../components/CustomBUTTON'


const [Name , setName]=("")
const [email , setemail]=("")
const [password , setpassword]=("")


const signup = ({handlePress }) => {
    onPress={handlePress}
  return (
    <ScrollView>
    <View className="flex-1 items-center justify-center ">
      <Text className="font-bold text-xl">signup</Text>
      <Customfiled label="name" containerStyle="mt-7" value={Name} onhandleChangeText={(e)=> {}, setForm{(...form ,Name:e)}}/>
      <Customfiled label="email" containerStyle="mt-7" value={Name} onhandleChangeText={(e)=> {}, setForm{(...form ,email:e)}}/>
      <Customfiled label="password" containerStyle="mt-7"  value={Name} onhandleChangeText={(e)=> {}, setForm{(...form ,password:e)}}/>

      <CustomBUTTON title="signup" onpress={"onPresssignup"}/>
     
    </View>
    </ScrollView>
  )
}

export default signup