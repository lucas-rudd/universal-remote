import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import NavigationButton from '../../../common/components/NavigationButton';
import { ADD_LIGHT_SCREEN } from '../../../config/Constants';
import { API_CALL_REQUEST } from '../../../config/ActionTypes';

const mapDispatchToProps = dispatch => ({
    onRequestIp: () => dispatch({ type: API_CALL_REQUEST }),
});

const mapStateToProps = state => ({
    fetching: state.fetching,
    ip: state.ip,
    error: state.error,
}
);

class PhilipsHueScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Light',
    };
    render() {
        const {
            fetching, ip, onRequestIp, error,
        } = this.props;
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
                    from={ADD_LIGHT_SCREEN}
                />
                { ip ? (
                    <Text>{ip}</Text>
                ) : (
                    <Text>No internal ip available</Text>
                )}
                { fetching ? (
                    <Text>Fetching...</Text>
                ) :
                    (
                        <Button
                            title="Get Ip"
                            onPress={onRequestIp}
                        />
                    )}

            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhilipsHueScreen);
