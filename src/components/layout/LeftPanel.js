import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AvgRateSheetDetails from '../component/AvgRateSheetDetails';
import SearchAvgRateDetails from '../component/SearchAvgRateDetails';
import SearchRateDetails from '../component/SearchRateDetails';

class LeftPanel extends Component {
  render() {
    return (
      <form>
        <div>
          <h4>Dashboard </h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rate Sheet
              {'            '}
              <Link
                to="/component/UploadFile"
                className="btn btn-secondary btn-sm"
              >
                Upload
              </Link>
              {'            '}
              <Link
                to="/component/SearchRateDetails"
                className="btn btn-secondary btn-sm"
              >
                Search
              </Link>
              {'            '}
              <Link to="/" className="btn btn-secondary btn-sm">
                Details
              </Link>
            </li>
            <li className="list-group-item">
              Avg Rate Sheet
              {'            '}
              <Link
                to="/component/UploadFile"
                className="btn btn-secondary btn-sm"
              >
                Upload
              </Link>
              {'            '}
              <Link
                to="/component/SearchAvgRateDetails"
                className="btn btn-secondary btn-sm"
              >
                Search
              </Link>
              {'            '}
              <Link
                to="/component/AvgRateSheetDetails"
                className="btn btn-secondary btn-sm"
              >
                Details
              </Link>
            </li>
          </ul>
        </div>
      </form>
    );
  }
}

LeftPanel.PropTypes = {
  heading: PropTypes.string.isRequired
};

export default LeftPanel;
