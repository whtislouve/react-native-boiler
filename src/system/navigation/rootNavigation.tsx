import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Pages } from '../helpers'
import { Home } from 'app/system/view/Home'

const Stack = createStackNavigator()

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode={undefined}>
      <Stack.Screen name={Pages.home} component={Home} />
    </Stack.Navigator>
  )
}
   