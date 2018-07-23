import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import NavigationButton from '../../../common/components/NavigationButton';
import { ADD_LIGHT_SCREEN } from '../../../config/Constants';
import { API_CALL_REQUEST } from '../../../config/ActionTypes';

class AddLightScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Light',
    };
    render() {
        const {
            fetching, internalipaddress, id, onRequestIp, error,
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
                { internalipaddress ? (
                    <Text>{internalipaddress} {id}</Text>
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

function mapDispatchToProps(dispatch) {
    return {
        onRequestIp: () => dispatch({ type: API_CALL_REQUEST }),
    };
}

function mapStateToProps(state) {
    const {
        fetching, internalipaddress, id, error,
    } = state.addLightReducer;
    return {
        fetching, internalipaddress, id, error,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLightScreen);
