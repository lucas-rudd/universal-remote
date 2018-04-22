import React from 'react';
import NavigationButton from '../../../common/NavigationButton';
import { HOME_SCREEN } from '../../../config/Constants';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        this.props.title = 'Philips Hue';
        this.props.to = 'PhilipsHue';
        this.props.from = HOME_SCREEN;
        return (
            <NavigationButton
                {...this.props}
            />
        );
    }
}
