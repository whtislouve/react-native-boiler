import {ReducerBuilder, reducerWithInitialState} from 'typescript-fsa-reducers'
import {EListLanguage} from 'app/system/helpers'
import {actionCreatorFactory } from 'typescript-fsa'

const systemFactory = actionCreatorFactory('SYSTEM')
export const action = systemFactory<EListLanguage>('TEST')

const setLanguage = (state: ISystemState, payload: EListLanguage): ISystemState => {
  return {
    ...state,
    language: EListLanguage.ru
  }
}

// class SystemAction {
//   static setLanguage = actionCreator<EListLanguage>('SYSTEM/SET_LANGUAGE')
// }

export interface ISystemState {
  language: EListLanguage
}

export const SystemInitialState: ISystemState = {
  language: EListLanguage.ru,
}

export const systemReducer: ReducerBuilder<ISystemState> = reducerWithInitialState(SystemInitialState)
 .case(action, setLanguage)