import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../redux/actions/entries';

class Pagination extends React.Component {
    render() {
        const numOfPages = Math.ceil(this.props.entries.length / this.props.perPage);
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${this.props.page === 0 ? 'disabled': ''}`}>
                        <a 
                            className="page-link"
                            onClick={() => this.props.setPage(this.props.page-1)}
                        >
                            Previous
                        </a>
                    </li>
                    {
                        Array.apply(null, {length: numOfPages}).map((e,i) => {
                            const classes = `page-item ${i === this.props.page ? 'active' : ''}`;
                            return (
                                <li className={classes} key={i}>
                                    <a 
                                        onClick={() => this.props.setPage(i)}
                                        className="page-link"
                                    >
                                        {i+1}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li className={`page-item ${this.props.page+1 === numOfPages ? 'disabled' : ''}`}>
                        <a 
                            className="page-link" 
                            onClick={() => this.props.setPage(this.props.page+1)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    entries: state.entries.entries,
    perPage: state.entries.perPage,
    page: state.entries.page
})

const mapDispatchToProps = (dispatch) => ({
    setPage: (page) => dispatch(setPage(page)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);