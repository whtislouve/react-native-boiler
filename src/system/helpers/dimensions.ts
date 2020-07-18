import { Dimensions, StatusBar, } from 'react-native'
import { platform } from 'app/system/helpers'

const windowDimensions = Dimensions.get('window')

export const windowWidth = windowDimensions.width;
export const windowHeight = windowDimensions.height - (!platform.is.ios ? StatusBar.currentHeight || 0 : 0)