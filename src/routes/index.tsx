import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Login from '~/shared/views/Login';
import Header from '~/shared/components/AccessibilityHeader';

import {
  LOGIN_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
} from '~/shared/constants/routes';

import {createTheme} from '~/shared/utils/theme';
import {ApplicationState} from '~/shared/store';
import Profile from '~/modules/User/view';
import {Home} from '~/modules/Movies/views/Home';

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

const RootStack: React.FC = () => {
  const {theme} = useSelector((state: ApplicationState) => state.theme);
  const {isLoggedIn} = useSelector((state: ApplicationState) => state.user);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ThemeProvider theme={createTheme(theme)}>
        <NavigationContainer>
          {isLoggedIn ? (
            <Stack.Navigator>
              <Stack.Screen
                name={HOME_SCREEN}
                component={Home}
                options={{header: () => <Header />}}
              />
              <Stack.Screen
                name={PROFILE_SCREEN}
                component={Profile}
                options={{header: () => <Header />}}
              />
            </Stack.Navigator>
          ) : (
            <LoginStack.Navigator
              initialRouteName={LOGIN_SCREEN}
              screenOptions={{
                gestureEnabled: false,
                animationEnabled: false,
              }}>
              <LoginStack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{header: () => <Header />}}
              />
            </LoginStack.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default RootStack;
