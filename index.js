/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppPrint from './tesprint/AppPrint';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppPrint);
