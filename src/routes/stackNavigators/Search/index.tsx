import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Search} from '~/modules/Movies/views/SearchMovies';

import {SEARCH_SCREEN} from '~/shared/constants/routes';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={SEARCH_SCREEN}
      component={Search}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default ProfileStack;
