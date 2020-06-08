import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import "../pagination/pagination.scss";

const defaultProps = {
    initialPage: 1,
    pageSize: 5
}

class PaginationComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentDidMount() {
        (this.props.items && this.props.items.length) && this.setPage(this.props.initialPage);
    }

    componentDidUpdate(prevProps, prevState) {
        (this.props.items !== prevProps.items) && this.setPage(this.props.initialPage);
    }

    setPage = (page) => {
        let items = this.props.items;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });

        return this.props.onChangePage(pageOfItems);
    }

    getPager = (totalItems, currentPage, pageSize) => {
        currentPage = currentPage || 1;
        //Configure your page size here.
        pageSize = pageSize || 5;
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <nav aria-label="..." className="align-items-right mt-3 mr-3">
                <ul className="pagination justify-content-end">
                    <li className={pager.currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                        {/* eslint-disable-next-line */}
                        <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span></a>
                    </li>
                    {pager.pages.map((page, index) =>
                        <li key={index} className={pager.currentPage === page ? 'page-item  active' : 'page-item'}>
                            {/* eslint-disable-next-line */}
                            <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
                        </li>
                    )}
                    <li className={pager.currentPage === pager.totalPages ? 'page-item  disabled' : 'page-item'}>
                        {/* eslint-disable-next-line */}
                        <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span></a>
                    </li>
                </ul>
            </nav>
        );
    }
}

PaginationComponent.propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
};

PaginationComponent.defaultProps = defaultProps;

export default PaginationComponent;
