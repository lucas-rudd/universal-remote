import React from 'react';
import NavigationButton from '../../../common/components/NavigationButton';
import { HOME_SCREEN } from '../../../config/Constants';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <NavigationButton
                {...this.props}
                title="Philips Hue"
                to="PhilipsHue"
                from={HOME_SCREEN}
            />
        );
    }
}
