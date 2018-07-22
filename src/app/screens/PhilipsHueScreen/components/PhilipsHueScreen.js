import React from 'react';
import { View } from 'react-native';
import NavigationButton from '../../../common/components/NavigationButton';
import AddLightButton from '../../../common/components/AddLightButton';
import { PHILIPS_HUE_SCREEN } from '../../../config/Constants';

export default class PhilipsHueScreen extends React.Component {
    static navigationOptions = {
        title: 'Philips Hue',
    };
    render() {
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
                    from={PHILIPS_HUE_SCREEN}
                />

                <AddLightButton
                    {...this.props}
                    from={PHILIPS_HUE_SCREEN}
                />
            </View>
        );
    }
}
