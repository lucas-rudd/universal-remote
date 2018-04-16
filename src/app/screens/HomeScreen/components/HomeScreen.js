import React from 'react';
import { Button } from 'react-native';
import { HOME_SCREEN } from '../../../config/Constants';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Philips Hue"
                onPress={() =>
                    navigate('PhilipsHue', { from: HOME_SCREEN })
                }
            />
        );
    }
}
