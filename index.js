import {AppRegistry} from 'react-native';
import { App } from './src/App';
import {name as appName} from './app.json';

global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;

AppRegistry.registerComponent(appName, () => App);
