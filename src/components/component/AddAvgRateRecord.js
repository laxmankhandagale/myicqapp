import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class AddAvgRateRecord extends Component {
  constructor() {
    super();
    this.state = {
      regions: ['Select', 'US-USA', 'CA-CANADA', 'UK'],
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

  onClickHandle = (regionvalue, e) => {
    console.log(regionvalue);
  };

  handleOnClick = async (
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
                  class="btn btn-secondary btn-sm"
                  onClick={this.onClickHandle.bind(this)}
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default AddAvgRateRecord;
