import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component {
    render() {
        let { isAuthenticated, component: Component, ...rest } = this.props;

        return (
            <Route 
                {...rest}
                component={(props) => (
                    isAuthenticated ?
                    <Component {...props} />
                    :
                    <Redirect to="/login" />
                )}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);