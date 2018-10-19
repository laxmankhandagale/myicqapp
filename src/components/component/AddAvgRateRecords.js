import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import AddAvgRateRecord from './AddAvgRateRecord';
import axios from 'axios';

class AddAvgRateRecords extends Component {
  constructor() {
    super();
    this.state = {
      regions: ['Select', 'US', 'CA', 'UK', 'PR'],
      mcclist: ['Select', 1234, 5678, 9876],
      regionvalue: '',
      mccvalue: 0,
      lowticketamt: 0,
      highticketamt: 0,
      avgrate: 0
    };
  }

  handleRegionChange = e => {
    this.setState({ regionvalue: e.target.value });
  };
  handleMccChange = e => {
    this.setState({ mccvalue: e.target.value });
  };
  onLowAmtChange = e => {
    this.setState({ lowticketamt: e.target.value });
  };

  onHighAmtChange = e => {
    this.setState({ highticketamt: e.target.value });
  };

  onAvgRateChange = e => {
    this.setState({ avgrate: e.target.value });
  };

  onClickHandle = async (
    regionvalue,
    mccvalue,
    lowticketamt,
    highticketamt,
    avgrate,
    e
  ) => {
    // console.log('inside edit=' + id);
    const addAvgRate = {
      regionvalue,
      mccvalue,
      lowticketamt,
      highticketamt,
      avgrate
    };
    console.log(
      'inside edit 11=' + lowticketamt + '...' + highticketamt + '...' + avgrate
    );
    //const config = { headers: { 'Content-Type': 'application/json' } };
    await axios
      .post('http://localhost:4000/icqapi/avgrateadd', addAvgRate)
      .then(function(response) {
        console.log(response);
      });
    console.log('inside edit done');
  };

  render() {
    const {
      regionvalue,
      mccvalue,
      lowticketamt,
      highticketamt,
      avgrate
    } = this.state;

    let regionsList = this.state.regions.map(region => {
      return (
        <option key={region} value={region}>
          {region}
        </option>
      );
    });
    let mcclist1 = this.state.mcclist.map(mcc => {
      return (
        <option key={mcc} value={mcc}>
          {mcc}
        </option>
      );
    });
    return (
      <form>
        <div className="card card-body mb-1">
          <div className="form-row">
            <label className="col-md-3">
              <h4> Add New Avg Rate Record</h4>
            </label>
            <div className="col-md-2 mb-2">
              <button type="submit" className="btn btn-primary">
                Save All
              </button>
              {'   '}
              <button type="submit" className="btn btn-primary">
                Add New
              </button>
            </div>
          </div>
          <div>
            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Region</th>
                  <th>MCC</th>
                  <th>Low Ticket</th>
                  <th>High Ticket</th>
                  <th>Avg Rate</th>
                  <th />
                </tr>
              </thead>
            </table>

            <table className="table table-striped">
              <tbody className="table table-striped">
                <tr>
                  <td>
                    <div>
                      <select
                        id="regionlistdropdown"
                        style={{ width: '120px' }}
                        onChange={this.handleRegionChange}
                      >
                        {regionsList}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      <select
                        id="mcclistdropdown"
                        style={{ width: '100px' }}
                        onChange={this.handleMccChange}
                      >
                        {mcclist1}
                      </select>
                    </div>
                  </td>
                  <td>
                    <div>
                      $
                      <input
                        style={{ width: '100px' }}
                        type="text"
                        name="lowticketamt"
                        id="lowticketamt"
                        onChange={this.onLowAmtChange}
                      />
                    </div>
                  </td>

                  <td>
                    <div>
                      $
                      <input
                        style={{ width: '100px' }}
                        type="text"
                        name="highticketamt"
                        id="highticketamt"
                        onChange={this.onHighAmtChange}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <input
                        style={{ width: '100px' }}
                        type="text"
                        name="avgrateper"
                        id="avgrateper"
                        onChange={this.onAvgRateChange}
                      />
                    </div>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-secondary btn-sm"
                      onClick={this.onClickHandle.bind(
                        this,
                        regionvalue,
                        mccvalue,
                        lowticketamt,
                        highticketamt,
                        avgrate
                      )}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    );
  }
}

export default AddAvgRateRecords;
