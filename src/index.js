import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppWithNavigationState from './app/App';
import AppReducer from './app/AppReducer';
import watcherSaga from './app/common/sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    AppReducer,
    compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watcherSaga);

const App = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);


AppRegistry.registerComponent('main', () => App);

export default App;
