import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import HomeScreen from './screens/HomeScreen/components/HomeScreen';
import PhilipsHueScreen from './screens/PhilipsHueScreen/components/PhilipsHueScreen';
import AddLightScreen from './screens/AddLightScreen/components/AddLightScreen';

export const AppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    PhilipsHue: { screen: PhilipsHueScreen },
    AddLight: { screen: AddLightScreen },
}, {
    initialRouteName: 'Home',
    mode: 'modal',
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

