// eslint-disable-next-line no-nested-ternary
import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import {HOME_TAB, PROFILE_TAB} from '~/shared/constants/routes';

import {IconTab, Touchable, Container, ContainerTab} from './styles';

interface BottomTabProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomTab: React.FC<BottomTabProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const {Colors} = useContext(ThemeContext);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const renderTab = (route: any, index: any) => {
    const {options} = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <Touchable
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}>
        <IconTab
          name={
            label === HOME_TAB
              ? isFocused
                ? 'home'
                : 'home-outline'
              : label === PROFILE_TAB
              ? isFocused
                ? 'person'
                : 'person-outline'
              : isFocused
              ? 'search-outline'
              : 'search-outline'
          }
          type="ionicons"
          color={isFocused ? Colors.TAB_ICON_FOCUS : Colors.TAB_ICON}
          size={25}
        />
      </Touchable>
    );
  };

  return (
    <Container>
      {state.routes.map((route: any, index: any) => (
        <ContainerTab key={index}>{renderTab(route, index)}</ContainerTab>
      ))}
    </Container>
  );
};

export default BottomTab;
