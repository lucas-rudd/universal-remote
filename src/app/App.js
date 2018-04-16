import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/components/HomeScreen';
import PhilipsHueScreen from './screens/PhilipsHueScreen/components/PhilipsHueScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    PhilipsHue: { screen: PhilipsHueScreen },
}, {
    initialRouteName: 'Home',
    mode: 'modal',
});

AppRegistry.registerComponent('main', () => App);

export default App;
