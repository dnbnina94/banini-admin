import React from 'react';
import { connect } from 'react-redux';
import { setDisqual } from '../redux/actions/filters';
import DatePicker from './DatePicker';

class Filters extends React.Component {

    handleSelectChange = (e) => {
        this.props.setDisqual(e.target.value);
    }

    render() {
        return (
            <div className="d-flex align-items-center">
                <div>
                    Datum:
                    <DatePicker />
                </div>
                {/*
                    <div className="ml-3">
                        <b>Prikaži diskvalifikovane:</b>
                        <select className="ml-3" onChange={this.handleSelectChange}>
                            <option value={0}>Oba</option>
                            <option value={1}>Da</option>
                            <option value={-1}>Ne</option>
                        </select>
                    </div>
                */}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setDisqual: (disqual) => dispatch(setDisqual(disqual))
})

export default connect(undefined, mapDispatchToProps)(Filters);