import React, { Fragment } from 'react';
import './App.css';
import HeaderComponent from './common/header/header';
import PaginatedTable from './view/view';

function App() {
  return (
    <Fragment>
      <span className="w-100">
        <HeaderComponent />
      </span>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <PaginatedTable />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
