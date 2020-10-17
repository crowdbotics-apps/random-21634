import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView1146792Navigator from '../features/CalendarView1146792/navigator';
import Maps4146789Navigator from '../features/Maps4146789/navigator';
import UserProfile146788Navigator from '../features/UserProfile146788/navigator';
import Maps146769Navigator from '../features/Maps146769/navigator';
import Settings146747Navigator from '../features/Settings146747/navigator';
import Settings146732Navigator from '../features/Settings146732/navigator';
import NotificationList146731Navigator from '../features/NotificationList146731/navigator';
import Maps146730Navigator from '../features/Maps146730/navigator';
import BlankScreen2146706Navigator from '../features/BlankScreen2146706/navigator';
import BlankScreen1146705Navigator from '../features/BlankScreen1146705/navigator';
import BlankScreen0146687Navigator from '../features/BlankScreen0146687/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView1146792: { screen: CalendarView1146792Navigator },
Maps4146789: { screen: Maps4146789Navigator },
UserProfile146788: { screen: UserProfile146788Navigator },
Maps146769: { screen: Maps146769Navigator },
Settings146747: { screen: Settings146747Navigator },
Settings146732: { screen: Settings146732Navigator },
NotificationList146731: { screen: NotificationList146731Navigator },
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
