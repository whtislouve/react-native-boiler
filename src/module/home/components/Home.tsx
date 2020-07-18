import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { styleSheetCreate, style } from 'app/system/helpers'

export class Home extends PureComponent{

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}


const styles = styleSheetCreate({
  container: style.view({
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  })
})