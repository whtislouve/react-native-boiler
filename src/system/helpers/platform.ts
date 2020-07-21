import { Platform } from 'react-native'
import { EPlatformName } from './constants'

export const platform = {
    is: {
        ios: Platform.OS === EPlatformName.ios,
        android: Platform.OS = EPlatformName.android,
    },
    version: Platform.Version
}