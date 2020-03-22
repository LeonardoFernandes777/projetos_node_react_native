import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';
import Menu from './src/Menu'

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Menu);
