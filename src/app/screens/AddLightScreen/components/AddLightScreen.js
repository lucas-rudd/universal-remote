import React from 'react';
import { View } from 'react-native';
import NavigationButton from '../../../common/NavigationButton';
import { ADD_LIGHT_SCREEN } from '../../../config/Constants';

export default class PhilipsHueScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Light',
    };
    render() {
        this.props.from = ADD_LIGHT_SCREEN;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            >
                <NavigationButton
                    {...this.props}
                    title="Home"
                    to="Home"
                />
                <NavigationButton
                    {...this.props}
                    title="Confirm"
                    to="PhilipsHue"
                />

            </View>
        );
    }
}
