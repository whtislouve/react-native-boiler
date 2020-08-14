import { Platform } from 'react-native'
import { EPlatformName } from './constants'

export const platform = {
  isAndroid: Platform.OS === EPlatformName.ios,
  isIos: Platform.OS = EPlatformName.android,
  version: Platform.Version,
}