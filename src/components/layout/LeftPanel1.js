import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import AvgRateSheetDetails from '../component/AvgRateSheetDetails';
//import SearchAvgRateDetails1 from '../component/SearchAvgRateDetails1';
//import SearchRateDetails from '../component/SearchRateDetails';
//import RateSheetDetails from '../component/RateSheetDetails';
//import SearchAvgRateDetailsDB from '../component/SearchAvgRateDetailsDB';

class LeftPanel1 extends Component {
  render() {
    return (
      <form>
        <div>
          <h4>Dashboard </h4>
          <div className="card card-body mb-2">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Qualification Rate Details
              </label>
              <div className="col-sm-10">
                <Link
                  to="/component/UploadFile"
                  className="btn btn-secondary btn-sm"
                >
                  Upload
                </Link>
                {'       '}
                <Link
                  to="/component/SearchRateDetails"
                  className="btn btn-secondary btn-sm"
                >
                  Search
                </Link>
                {'       '}
                <Link
                  to="/component/RateSheetDetails"
                  className="btn btn-secondary btn-sm"
                >
                  Details
                </Link>
                {'       '}
                <Link
                  to="/component/AddNewRateRecord"
                  className="btn btn-secondary btn-sm"
                >
                  Add Record
                </Link>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Qualification Avg Rate Details
              </label>
              <div className="col-sm-10">
                <Link
                  to="/component/UploadFile"
                  className="btn btn-secondary btn-sm"
                >
                  Upload
                </Link>
                {'       '}
                <Link
                  to="/component/SearchAvgRateDetails1"
                  className="btn btn-secondary btn-sm"
                >
                  Search
                </Link>
                {'       '}
                <Link
                  to="/component/AvgRateSheetDetails"
                  className="btn btn-secondary btn-sm"
                >
                  Details
                </Link>
                {'       '}
                <Link
                  to="/component/AddAvgRateRecords"
                  className="btn btn-secondary btn-sm"
                >
                  Add Record
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LeftPanel1;
