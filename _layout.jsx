import { View, Text } from 'react-native'
import React from 'react'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
    async getToken(key) {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('SecureStore get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY


}
if (publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

const _layout = () => {
  return (
    
function RootLayoutNav() {
    return (
      <ClerkProvider publishableKey={publishableKey}>
        <ClerkLoaded>
     <Stack>
        <Stack.Screen name="index"  option={{headerShown:flase}}/>
     </Stack>
    
           
          <Slot />
        </ClerkLoaded>
      </ClerkProvider>
    )
  }
    
  )
}

export default _layout