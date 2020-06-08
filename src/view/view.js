import React, { Component } from "react";
import TableComponent from "../common/table/table";
import { Card } from "reactstrap";

class PaginatedTable extends Component {

    constructor() {
        super();
        this.state = {
            demoData: [{
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2022/04/25',
                salary: '320800'
            }, {
                name: 'Garrett Winters',
                position: 'Accountant',
                office: 'Tokyo',
                age: '65',
                date: '2020/07/21',
                salary: '314800'
            }, {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                office: 'Edinburgh',
                age: '41',
                date: '2020/08/21',
                salary: '320810'
            }, {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                office: 'Edinburgh',
                age: '51',
                date: '2020/04/20',
                salary: '350800'
            }, {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '54',
                date: '2020/04/28',
                salary: '320806'
            }, {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '68',
                date: '2020/03/25',
                salary: '220800'
            }, {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2020/04/25',
                salary: '120800'
            }, {
                name: 'Airi Satou',
                position: 'Accountant',
                office: 'Tokyo',
                age: '54',
                date: '2020/04/28',
                salary: '320806'
            }, {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                office: 'New York',
                age: '68',
                date: '2020/03/25',
                salary: '220800'
            }, {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                office: 'Tokyo',
                age: '55',
                date: '2020/04/25',
                salary: '120800',
            }],
        }
    }

    render() {
        return (
            <Card className="mt-5">
                <TableComponent header={headers} body={this.state.demoData} />
            </Card>

        );
    }
}


export default PaginatedTable;

const headers = [
    {
        key: 'name',
        value: 'Name',
        dataType: 'string'
    }, {
        key: 'position',
        value: 'Position',
        dataType: 'string'
    }, {
        key: 'office',
        value: 'Office',
        dataType: 'string'
    }, {
        key: 'age',
        value: 'Age',
        dataType: 'float'
    }, {
        key: 'date',
        value: 'Start date',
        dataType: 'string'
    }, {
        key: 'salary',
        value: 'Salary',
        dataType: 'float'
    },
];