import React from 'react';
import { Button } from 'react-native';
import { PHILIPS_HUE_SCREEN } from '../../../config/Constants';

export default class PhilipsHueScreen extends React.Component {
    static navigationOptions = {
        title: 'Philips Hue',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Home"
                onPress={() =>
                    navigate('Home', { from: PHILIPS_HUE_SCREEN })
                }
            />
        );
    }
}
