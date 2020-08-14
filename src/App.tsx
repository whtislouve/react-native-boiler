import React, { PureComponent } from 'react'
import { AppState, AppStateStatus, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from 'app/system/navigation'
import { Provider } from 'react-redux'
import { Persistor } from 'redux-persist'
import { Store } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore, IApplicationState } from 'app/system/store'
import { Loader } from 'app/module/global/view/Loader'
import { localization } from 'app/system/localization'

console.ignoredYellowBox = [
  'Remote debugger',
  'Warning: isMounted… is deprecated',
  'Module RCTImageLoader'
]

interface IProps {

}

interface IState {
  appStatus: AppStateStatus
}

export class App extends PureComponent<IProps, IState>{
  private readonly store: Store
  private readonly persistor: Persistor

  constructor(props: IProps) {
    super(props)
    const { store, persistor } = configureStore(this.onStoreCreated)
    this.store = store
    this.persistor = persistor
  }

  state = {
    appStatus: AppState.currentState, 
  }

  componentDidMount(): void {
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentWillUnmount(): void {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange = (nextAppStatus: AppStateStatus): void => {
    if (this.state.appStatus.match(/inactive|background/) && status === 'active' ) {
     
    }
    this.setState({ appStatus: nextAppStatus })
  }

  onStoreCreated = (): void => {
    const state: IApplicationState = this.store.getState()
    localization.list.setLanguage(state.system.language)
  }

  renderLoader = (): JSX.Element => {
    return (
      <Loader />
    )
  }

  render(): JSX.Element {
    return (
     <PersistGate
       loading={this.renderLoader()}
       persistor={this.persistor}
     >
        <Provider store={this.store}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </Provider>
     </PersistGate>
    )
  }
}
