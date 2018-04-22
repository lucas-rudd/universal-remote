import React from 'react';
import { Button } from 'react-native';

export default class AddLightButton extends React.Component {
    static navigationOptions = {
        title: 'Add a light',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Add a light"
                onPress={() =>
                    navigate('AddLight', { from: this.props.from })
                }
            />
        );
    }
}
