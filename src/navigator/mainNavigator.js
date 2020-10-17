import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps146730Navigator from '../features/Maps146730/navigator';
import BlankScreen2146706Navigator from '../features/BlankScreen2146706/navigator';
import BlankScreen1146705Navigator from '../features/BlankScreen1146705/navigator';
import BlankScreen0146687Navigator from '../features/BlankScreen0146687/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps146730: { screen: Maps146730Navigator },
BlankScreen2146706: { screen: BlankScreen2146706Navigator },
BlankScreen1146705: { screen: BlankScreen1146705Navigator },
BlankScreen0146687: { screen: BlankScreen0146687Navigator },

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
