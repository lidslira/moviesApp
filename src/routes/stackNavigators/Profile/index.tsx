import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '~/modules/User/view';

import {PROFILE_SCREEN} from '~/shared/constants/routes';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={PROFILE_SCREEN}
      component={Profile}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default ProfileStack;
