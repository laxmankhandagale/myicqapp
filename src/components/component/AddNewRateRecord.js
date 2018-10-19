import React, { Component } from 'react';
import axios from 'axios';

class AddNewRateRecord extends Component {
  constructor() {
    super();
    this.state = {
      regions: ['All', 'US', 'CA', 'UK', 'PR'],
      cardtypelist: ['All', 'American Express', 'MasterCard', 'Visa'],
      chargetypelist: ['All', '1688', '169B', '1278'],
      region: '',
      card_brand: '',
      charge_type: '',
      card_type: '',
      card_type_name: '',
      card_plan: '',
      mcc_list: '',
      interchange_description: '',
      ic_code: 0,
      rate: 0,
      txn_fee: 0,
      days: '',
      downgrade_higherrate: '',
      other_qualification_criteria: ''
    };
  }

  onCardPlanChnage = e => {
    this.setState({ card_plan: e.target.value });
  };
  onCardTypeNameChange = e => {
    this.setState({ card_type_name: e.target.value });
  };

  onCardTypeChange = e => {
    this.setState({ card_type: e.target.value });
  };

  onChargeTypeChange = e => {
    this.setState({ charge_type: e.target.value });
  };

  onCardBrandChange = e => {
    this.setState({ card_brand: e.target.value });
  };

  onRegionChange = e => {
    this.setState({ region: e.target.value });
  };

  onMccChange = e => {
    this.setState({ mcc_list: e.target.value });
  };

  onInterchangeDescriptionChange = e => {
    this.setState({ interchange_description: e.target.value });
  };

  onICCodeChange = e => {
    this.setState({ ic_code: e.target.value });
  };

  onRateChange = e => {
    this.setState({ rate: e.target.value });
  };
  onTxnFeeChange = e => {
    this.setState({ txn_fee: e.target.value });
  };

  onDaysChange = e => {
    this.setState({ days: e.target.value });
  };
  onDowngradeHiherRateChange = e => {
    this.setState({ downgrade_higherrate: e.target.value });
  };

  onOtherQualificationCriteriaChange = e => {
    this.setState({ other_qualification_criteria: e.target.value });
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

    const {
      region,
      card_brand,
      charge_type,
      card_type,
      card_type_name,
      card_plan,
      mcc_list,
      interchange_description,
      ic_code,
      rate,
      txn_fee,
      days,
      downgrade_higherrate,
      other_qualification_criteria
    } = this.state;

    return (
      <form>
        <div className="card card-body mb-1">
          <div className="form-row">
            <label className="col-md-3">
              <h4> Qualification Rate Details</h4>
            </label>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Region</label>
            <div className="col-sm-1">
              <select id="regionlistdropdown" style={{ width: '150px' }}>
                onChange=
                {this.onRegionChange}
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
                onChange={this.onCardBrandChange}
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
                onChange={this.onChargeTypeChange}
              >
                {chargetypelist1}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Card Type</label>
            <div className="col-sm-10">
              <input
                name="card_charge_type"
                style={{ width: '200px' }}
                onChnage={this.onCardTypeChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Card Type Name</label>
            <div className="col-sm-10">
              <input
                name="card_type_name"
                style={{ width: '250px' }}
                onChange={this.onCardTypeNameChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Card Plan</label>
            <div className="col-sm-10">
              <input
                name="card_plan"
                style={{ width: '200px' }}
                onChange={this.onCardPlanChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Interchange Description
            </label>
            <div className="col-sm-10">
              <input
                name="card_type_name"
                style={{ width: '500px' }}
                onChange={this.onInterchangeDescriptionChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">IC Code</label>
            <div className="col-sm-10">
              <input
                name="ic_code"
                style={{ width: '200px' }}
                onChange={this.onICCodeChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Rate</label>
            <div className="col-sm-10">
              <input
                name="rate"
                style={{ width: '200px' }}
                onChange={this.onRateChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Txn Fee</label>
            <div className="col-sm-10">
              <input
                name="txn_fee"
                style={{ width: '200px' }}
                onChange={this.onTxnFeeChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Days</label>
            <div className="col-sm-10">
              <input
                name="days"
                style={{ width: '200px' }}
                onChnage={this.onDaysChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Downgrade/HighRate
            </label>
            <div className="col-sm-10">
              <input
                name="downgrade_highrate"
                style={{ width: '200px' }}
                onChange={this.onDowngradeHiherRateChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">MCC</label>
            <div className="col-sm-10">
              <input
                style={{ width: '500px', height: '60px' }}
                name="mcc"
                id="mcc"
                onChange={this.onMccChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Other Qualification Criteria
            </label>
            <div className="col-sm-10">
              <input
                name="other"
                style={{ width: '500px', height: '50px' }}
                onChange={this.onOtherQualificationCriteriaChange}
              />
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddNewRateRecord;
