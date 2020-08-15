import React, { PureComponent } from 'react'
import { View, Text, } from 'react-native'
import { 
  styleSheetCreate, 
  style,
  Color,
  styleSheetFlatten,
 } from 'app/system/helpers'
import { localization } from 'app/system/localization'

interface IProps {
  isFloating?: boolean
}

interface IState {

}

export class Loader extends PureComponent<IProps, IState>{
  render() {
    const { isFloating } = this.props

    const container = styleSheetFlatten([
      styles.container,
      isFloating ? styles.floating : null
    ])

    return (
      <View style={container}>
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
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  floating: style.view({
    
  }),
})