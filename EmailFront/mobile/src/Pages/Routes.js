import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './Login';
import Home from './Home'

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Home,
  })
);

export default Routes;