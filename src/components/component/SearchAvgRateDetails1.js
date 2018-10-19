import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import SearchAvgRateDetails2 from './SearchAvgRateDetails2';

class SearchAvgRateDetails1 extends Component {
  constructor() {
    console.log('This');
    super();
    this.state = {
      //  ratedetails: [],
      regions: ['All', 'US', 'CA', 'UK'],
      mcclist: ['All', '1234', '1456', '24334', '3232'],
      regionvalue: '',
      mccvalue: 0,
      avgticketamt: 0
    };
  }
  handleRegionChange = e => {
    this.setState({ regionvalue: e.target.value });
  };
  handleMccChange = e => {
    this.setState({ mccvalue: e.target.value });
  };
  onAmtChange = e => {
    this.setState({ avgticketamt: e.target.value });
  };

  render() {
    let regionsList = this.state.regions.map(region => {
      return (
        <option key={region} value={region}>
          {region}
        </option>
      );
    });
    let mccList1 = this.state.mcclist.map(mcc => {
      return (
        <option key={mcc} value={mcc}>
          {mcc}
        </option>
      );
    });

    //const { ratedetails } = this.state;

    return (
      <form>
        <h4>Qualification Avg Rate Details Search</h4>
        <div className="card card-body mb-1">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"> Region</label>
            <div className="col-sm-10">
              <select
                id="regionlistdropdown"
                style={{ width: '150px' }}
                onChange={this.handleRegionChange}
              >
                {regionsList}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">MCC</label>
            <div className="col-sm-10">
              <select
                id="mcclistdropdown"
                style={{ width: '150px', margin: 'auto' }}
                onChange={this.handleMccChange}
              >
                {mccList1}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Avg Ticket Amount</label>
            <div className="col-sm-10">
              <input
                type="text"
                name="avgticketamt"
                placeholder="Avg Ticket Amount"
                style={{ width: '200px' }}
                onChange={this.onAmtChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <Link
              to={`/component/SearchAvgRateDetails2/${this.state.regionvalue}/${
                this.state.mccvalue
              }/${this.state.avgticketamt}`}
              className="btn btn-primary mb-1"
            >
              Search
            </Link>
          </div>
        </div>
      </form>
      //output
    );
  }
}

export default SearchAvgRateDetails1;
