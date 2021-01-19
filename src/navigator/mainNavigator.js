import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings194517Navigator from '../features/Settings194517/navigator';
import UserProfile194510Navigator from '../features/UserProfile194510/navigator';
import Settings194509Navigator from '../features/Settings194509/navigator';
import Settings194507Navigator from '../features/Settings194507/navigator';
import SignIn2194505Navigator from '../features/SignIn2194505/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings194517: { screen: Settings194517Navigator },
UserProfile194510: { screen: UserProfile194510Navigator },
Settings194509: { screen: Settings194509Navigator },
Settings194507: { screen: Settings194507Navigator },
SignIn2194505: { screen: SignIn2194505Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
