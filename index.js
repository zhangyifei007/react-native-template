/** @format */

import {AppRegistry, Text} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';
import AppConfig from './App/Config';

AppRegistry.registerComponent(appName, () => App);
