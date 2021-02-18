import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class PublicRoute extends React.Component {
    render() {
        let { isAuthenticated, component : Component, ...rest } = this.props;

        return (
            <Route
                {...rest}
                component={(props) => (
                    isAuthenticated ?
                    <Redirect to="/" />
                    :
                    <Component {...props} />
                )}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);