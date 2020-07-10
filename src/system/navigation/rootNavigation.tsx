import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListPages  } from 'app/system/navigation'
import { Home } from 'app/module/home/components/Home'

const Stack = createStackNavigator()

export const RootNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator headerMode={undefined}>
      <Stack.Screen name={ListPages.home} component={Home} />
    </Stack.Navigator>
  )
}
   