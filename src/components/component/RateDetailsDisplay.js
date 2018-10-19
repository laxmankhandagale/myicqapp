import React, { Component } from 'react';
import axios from 'axios';

class RateDetailsDisplay extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log('---id==' + id);
    await axios
      .get(`http://localhost:4000/icqapi/raterecorddetails/${id}`)
      .then(response => this.setState({ ratedetails: response.data }));

    /*const ratedetails1 = [{
      id: 1,
      region: 'US',
      mcc: 3456,
      lowticket: 10.01,
      highticket: 20.01,
      avgrate: 2.34
    }];*/

    //this.setState({ ratedetails: ratedetails1 });
  }

  render() {
    const { ratedetails } = this.state;

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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
                      name="card_type_name"
                      style={{ width: '500px' }}
                      value={ratedetail.interchange_description}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">IC Code</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="ic_code"
                      style={{ width: '200px' }}
                      value={ratedetail.ic_code}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Rate</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="rate"
                      style={{ width: '200px' }}
                      value={ratedetail.rate}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Txn Fee</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="txn_fee"
                      style={{ width: '200px' }}
                      value={ratedetail.txn_fee}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Days</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="days"
                      style={{ width: '200px' }}
                      value={ratedetail.days}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Downgrade/HighRate
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="downgrade_highrate"
                      style={{ width: '200px' }}
                      value={ratedetail.downgrade_highrate}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">MCC</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="mcc"
                      style={{ width: '500px', height: '60px' }}
                      value={ratedetail.mcc_list}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">
                    Other Qualification Criteria
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="other"
                      style={{ width: '500px', height: '50px' }}
                      value={ratedetail.other_qualification_criteria}
                    />
                  </div>
                </div>
              </tr>
            ))}
          </table>
        </div>
      </form>
    );
  }
}

export default RateDetailsDisplay;
