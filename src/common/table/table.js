import React, { Component, Fragment } from 'react';
import { Table, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import "./table.scss";
import PaginationComponent from '../pagination/pagination';

class TableComponent extends Component {

    constructor() {
        super();
        this.state = {
            pageOfItems: [],
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.compareByAsc = this.compareByAsc.bind(this);
        this.compareByDesc = this.compareByDesc.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }


    compareByAsc(key, dataType) {
        this.setState({ arrow: true });
        return function (a, b) {
            if (dataType === 'float') {
                a[key] = Number.parseFloat(a[key]);
                b[key] = Number.parseFloat(b[key]);
            }
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    compareByDesc(key, dataType) {
        this.setState({ arrow: false });
        return function (a, b) {
            if (dataType === 'float') {
                a[key] = Number.parseFloat(a[key]);
                b[key] = Number.parseFloat(b[key]);
            }
            if (a[key] < b[key]) return 1;
            if (a[key] > b[key]) return -1;
            return 0;
        };
    }

    sortBy(key, dataType) {
        let arrayCopy = [...this.state.pageOfItems];
        const arrInStr = JSON.stringify(arrayCopy);
        arrayCopy.sort(this.compareByAsc(key, dataType));
        const arrInStr1 = JSON.stringify(arrayCopy);
        if (arrInStr === arrInStr1) {
            arrayCopy.sort(this.compareByDesc(key, dataType));
        }
        this.setState({ pageOfItems: arrayCopy });
    }

    getHeader = () => {
        return this.props.header.map(header => {
            return (
                <th className="py-3 row-fonts" onClick={() => this.sortBy(header.key, header.dataType)} key={header.key}>{header.value}
                    <img className="ml-2" src={process.env.PUBLIC_URL + 'images/sort.svg'} alt='ASC' height="15" />
                </th>
            );
        });
    }


    renderRowData = (row) => {
        return this.props.header.map(({ key }, index) => {
            return (
                <td key={index}>
                    <div className="item">
                        <span>{row[key]}</span>
                    </div>
                </td>
            );
        });
    };

    getBody = () => {
        return this.state.pageOfItems.map((row, index) => {
            return (
                <tr key={index} className="text-center">
                    {this.renderRowData(row, 1)}
                </tr>
            );
        });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <Fragment>
                <div className="table-wrapper" style={{ maxHeight: this.props.height }}>
                    <Table striped bordered className="m-0 table-component">
                        <thead className="sticky-header text-center">
                            <tr>
                                {this.getHeader()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.getBody()}
                        </tbody>
                    </Table>
                </div>
                <Row className="my-1">
                    <Col md="12">
                        <PaginationComponent items={this.props.body} onChangePage={this.onChangePage} />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
TableComponent.propTypes = {
    header: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    body: PropTypes.any,
};
export default TableComponent;
