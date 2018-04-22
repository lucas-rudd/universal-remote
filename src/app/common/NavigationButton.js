import React from 'react';
import { Button } from 'react-native';

export default class NavigationButton extends Button {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                {...this.props}
                onPress={() =>
                    navigate(this.props.to, { from: this.props.from })
                }
            />
        );
    }
}
