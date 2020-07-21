import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { styleSheetCreate, style } from 'app/system/helpers'
import { localization } from 'app/system/localization'

export class Home extends PureComponent{

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {localization.list.pleaseWait}
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