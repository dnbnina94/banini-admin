import React from 'react';
import { connect } from 'react-redux';
import { startSetEntries } from '../redux/actions/entries';

import Filters from './Filters';
import Entries from './Entries';
import Pagination from './Pagination';
import { rendered } from '../redux/actions/ui';


class HomePage extends React.Component {
    state = {
        entries: []
    }

    componentDidMount() {
        this.props.startSetEntries();
    }

    setEntries = () => {
        // const firstIndex = this.props.page*this.props.perPage;
        // this.setState(() => ({
        //     entries: this.props.entries.slice(firstIndex, firstIndex+this.props.perPage)
        // }))
        this.setState(() => ({
            entries: [...this.props.entries]
        }));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.date.getTime() !== this.props.date.getTime()) {
            this.props.startSetEntries();
        }
        if (prevProps.disqual !== this.props.disqual) {
            this.props.startSetEntries();
        }
        if (prevProps.entries !== this.props.entries) {
            this.setEntries();
        }
        if (prevProps.page !== this.props.page) {
            this.setEntries();
        }
    } 
    render() {
        return (
            <div className="page">
                <Filters />
                <Entries entries={this.state.entries} />
                {/*
                    this.state.entries.length !== 0 &&
                    <Pagination />
                */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    entries: state.entries.entries,
    date: state.filters.date,
    disqual: state.filters.disqual,
    page: state.entries.page,
    perPage: state.entries.perPage
})

const mapDispatchToProps = (dispatch) => ({
    startSetEntries: () => dispatch(startSetEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);