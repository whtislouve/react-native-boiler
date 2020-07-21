import { KeyboardEventName } from 'react-native'
import { platform } from './platform'

export const keyboardHideEvent: KeyboardEventName =
  platform.is.ios
    ? 'keyboardWillHide'
    : 'keyboardDidHide'
export const keyboardShowEvent: KeyboardEventName =
  platform.is.ios
    ? 'keyboardWillShow'
    : 'keyboardDidShow'