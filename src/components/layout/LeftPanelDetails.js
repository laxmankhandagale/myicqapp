import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchAvgRateDetails from '../component/SearchAvgRateDetails';

class LeftPanel extends Component {
  render() {
    return (
      <form>
        <div className="card card-body mb-2">
          <h4>Dashboard </h4>
          <div className="card card-body mb-2">
            <div className="form-group row">
              <Link to="/component/SearchAvgRateDetails">Rate Details</Link>
            </div>

            <div className="form-group row">
              <Link to="/component/SearchAvgRateDetails">Avg Rate Details</Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

LeftPanel.PropTypes = {
  heading: PropTypes.string.isRequired
};

export default LeftPanel;
