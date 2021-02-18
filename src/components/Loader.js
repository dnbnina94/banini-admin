import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component {
    render() {
        return (
            this.props.loading ?
            <div className="loader">
                <p>Loading...</p>
            </div>
            :
            null
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.ui.loading
})

export default connect(mapStateToProps)(Loader);