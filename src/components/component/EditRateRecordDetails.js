import React, { Component } from 'react';
import axios from 'axios';

class EditRateRecordDetails extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: [],
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

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log('---id==' + id);
    await axios
      .get(`http://localhost:4000/icqapi/raterecorddetails/${id}`)
      .then(response => this.setState({ ratedetails: response.data }));
  }

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

  handleOnClick = async (
    mcc_list,
    interchange_description,
    ic_code,
    rate,
    txn_fee,
    days,
    downgrade_higherrate,
    other_qualification_criteria,
    e
  ) => {
    const { id } = this.props.match.params;
    console.log('inside edit=' + id);
    const updRateDtls = {
      mcc_list,
      interchange_description,
      ic_code,
      rate,
      txn_fee,
      days,
      downgrade_higherrate,
      other_qualification_criteria
    };
    console.log('inside edit 11=');
    //const config = { headers: { 'Content-Type': 'application/json' } };
    await axios.put(
      `http://localhost:4000/icqapi/ratedetailsrecordupd/${id}`,
      updRateDtls
    );
    console.log('inside edit done');
  };

  render() {
    const {
      ratedetails,
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

          <table className="table table-striped">
            {ratedetails.map(ratedetail => (
              <tr key={ratedetail.id}>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Region</label>
                  <div className="col-sm-1">
                    <input
                      name="region"
                      style={{ width: '200px' }}
                      value={ratedetail.region}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Card Brand</label>
                  <div className="col-sm-10">
                    <input
                      name="card_brand"
                      style={{ width: '200px' }}
                      value={ratedetail.card_brand}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Card Charge Type
                  </label>
                  <div className="col-sm-10">
                    <input
                      name="card_charge_type"
                      style={{ width: '200px' }}
                      value={ratedetail.card_charge_type}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Card Type Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      name="card_type_name"
                      style={{ width: '250px' }}
                      value={ratedetail.card_type_name}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Card Plan</label>
                  <div className="col-sm-10">
                    <input
                      name="card_plan"
                      style={{ width: '200px' }}
                      value={ratedetail.card_plan}
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
                      placeholder={ratedetail.interchange_description}
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
                      placeholder={ratedetail.ic_code}
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
                      placeholder={ratedetail.rate}
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
                      placeholder={ratedetail.txn_fee}
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
                      placeholder={ratedetail.days}
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
                      placeholder={ratedetail.downgrade_highrate}
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
                      placeholder={ratedetail.mcc_list}
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
                      placeholder={ratedetail.other_qualification_criteria}
                      onChange={this.onOtherQualificationCriteriaChange}
                    />
                  </div>
                </div>
                <div className="col-md-2 mb-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleOnClick.bind(
                      this,
                      mcc_list,
                      interchange_description,
                      ic_code,
                      rate,
                      txn_fee,
                      days,
                      downgrade_higherrate,
                      other_qualification_criteria
                    )}
                  >
                    Save
                  </button>
                </div>
              </tr>
            ))}
          </table>
        </div>
      </form>
    );
  }
}

export default EditRateRecordDetails;
