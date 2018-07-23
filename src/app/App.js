import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './common/sagas/saga';
import reducers from './common/reducers';
import HomeScreen from './screens/HomeScreen/components/HomeScreen';
import PhilipsHueScreen from './screens/PhilipsHueScreen/components/PhilipsHueScreen';
import AddLightScreen from './screens/AddLightScreen/components/AddLightScreen';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watcherSaga);

const AppNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    PhilipsHue: { screen: PhilipsHueScreen },
    AddLight: { screen: AddLightScreen },
}, {
    initialRouteName: 'Home',
    mode: 'modal',
});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('main', () => App);

export default App;
