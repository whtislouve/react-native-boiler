import { KeyboardEventName } from 'react-native'
import { platform } from './platfrom'

export const keyboardHideEvent: KeyboardEventName =
  platform.is.ios
    ? 'keyboardWillHide'
    : 'keyboardDidHide'
export const keyboardShowEvent: KeyboardEventName =
  platform.is.ios
    ? 'keyboardWillShow'
    : 'keyboardDidShow'