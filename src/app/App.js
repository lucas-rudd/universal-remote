import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as HomeScreen from './screens/HomeScreen/components/HomeScreen';
import * as PhilipsHueScreen from './screens/PhilipsHueScreen/components/PhilipsHueScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    PhilipsHue: { screen: PhilipsHueScreen },
}, {
    initialRouteName: 'Home',
    mode: 'modal',
});

AppRegistry.registerComponent('main', () => App);

export default App;
