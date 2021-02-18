import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase/firebase';

class Header extends React.Component {
    logout = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <nav className="navigation navbar navbar-dark bg-primary justify-content-between align-items-center">
                <span className="navbar-brand">Trik Igra Memorije Admin</span>
                {
                    this.props.isAuthenticated &&
                    <span 
                        onClick={this.logout}
                        className="navigation--logout-btn"
                    >
                        Logout
                    </span>
                }
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(Header);