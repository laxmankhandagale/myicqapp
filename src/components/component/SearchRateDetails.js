import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchRateDetails extends Component {
  constructor() {
    super();
    this.state = {
      regions: ['All', 'US', 'CA', 'UK', 'PR'],

      cardtypelist: ['All', 'American Express', 'MasterCard', 'Visa'],
      chargetypelist: ['All', '1688', '169B', '1278'],
      regionvalue: '',
      mccvalue: 0,
      cardtypevalue: '',
      chargetypevalue: '',
      interchangedesc: ''
    };
  }

  handleRegionChange = e => {
    this.setState({ regionvalue: e.target.value });
  };
  handleMccChange = e => {
    this.setState({ mccvalue: e.target.value });
  };
  handleCardTypeChange = e => {
    this.setState({ cardtypevalue: e.target.value });
  };

  handleChargeTypeChange = e => {
    this.setState({ chargetypevalue: e.target.value });
  };

  handleICDChange = e => {
    this.setState({ interchangedesc: e.target.value });
  };
  render() {
    let regionsList = this.state.regions.map(region => {
      return (
        <option key={region} value={region}>
          {region}
        </option>
      );
    });

    let cardtypelist1 = this.state.cardtypelist.map(cardtype => {
      return (
        <option key={cardtype} value={cardtype}>
          {cardtype}
        </option>
      );
    });

    let chargetypelist1 = this.state.chargetypelist.map(chargetype => {
      return (
        <option key={chargetype} value={chargetype}>
          {chargetype}
        </option>
      );
    });

    return (
      <form>
        <h4>Qualification Rate Details Search</h4>
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
            <label className="col-sm-2 col-form-label">Card Brand</label>
            <div className="col-sm-10">
              <select
                style={{ width: '150px', margin: 'auto' }}
                id="cardtypelistdropdown"
                onChange={this.handleCardTypeChange}
              >
                {cardtypelist1}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Charge Type</label>
            <div className="col-sm-10">
              <select
                style={{ width: '150px', margin: 'auto' }}
                id="chargetypelistdropdown"
                onChange={this.handleChargeTypeChange}
              >
                {chargetypelist1}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">MCC</label>
            <div className="col-md-10">
              <input
                type="text"
                name="mcc"
                placeholder="MCC"
                style={{ width: '200px' }}
                onChange={this.handleMccChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Interchange Description
            </label>
            <div className="col-md-10">
              <input
                type="text"
                name="interchangedescription"
                placeholder="Interchange description"
                style={{ width: '200px' }}
                onChange={this.handleICDChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <Link
              to={`/component/SearchRateDetailsResults/${
                this.state.regionvalue
              }/${this.state.cardtypevalue}/${this.state.chargetypevalue}/${
                this.state.mccvalue
              }/${this.state.interchangedesc}`}
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

export default SearchRateDetails;
