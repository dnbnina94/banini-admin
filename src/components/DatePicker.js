import React, { useState } from "react";
import { connect } from "react-redux";
import { setDate } from "../redux/actions/filters";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatePickerComponent extends React.Component {
    handleChange = (date) => {
        this.props.setDate(date);
    }
    render() {
        return (
            <DatePicker 
                calendarClassName="custom-calendar"
                selected={this.props.date} 
                onChange={date => this.handleChange(date)}
                dateFormat="dd.MM.yyyy"
                maxDate={new Date()}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    date: state.filters.date
});

const mapDispatchToProps = (dispatch) => ({
    setDate: (date) => dispatch(setDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerComponent);