import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import classnames from 'classnames';

class EditAvgRateRecord extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: [],
      lowticketamt: 0,
      highticketamt: 0,
      avgrate: 0
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    console.log('---id==' + id);
    await axios
      .get(`http://localhost:4000/icqapi/avgratedetails/${id}`)
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
  onAvgRateChange = e => {
    this.setState({ avgrate: e.target.value });
  };

  onLowTicketAmtChange = e => {
    this.setState({ lowticketamt: e.target.value });
  };

  onHighTicketAmtChange = e => {
    this.setState({ highticketamt: e.target.value });
  };

  handleOnClick = async (lowticketamt, highticketamt, avgrate, e) => {
    const { id } = this.props.match.params;
    console.log('inside edit=' + id);
    const updAvgRate = {
      lowticketamt,
      highticketamt,
      avgrate
    };
    console.log(
      'inside edit 11=' + lowticketamt + '...' + highticketamt + '...' + avgrate
    );
    //const config = { headers: { 'Content-Type': 'application/json' } };
    await axios.put(
      `http://localhost:4000/icqapi/avgrateupdate/${id}`,
      updAvgRate
    );
    console.log('inside edit done');
  };

  
  render() {
    const { ratedetails } = this.state;
    const { lowticketamt, highticketamt, avgrate } = this.state;

    if (ratedetails) {
      return (
        <form>
          <div className="card card-body mb-1">
            <div className="form-row">
              <label className="col-md-6">
                <h4> Qualification Avg Rate Details</h4>
              </label>
            </div>

            <table className="table table-striped">
              <thead className="thead-inverse">
                <tr>
                  <th>Region</th>
                  <th>MCC</th>
                  <th>Low Ticket</th>
                  <th>High Ticket</th>
                  <th>Avg Rate</th>
                </tr>
              </thead>
              <tbody className="table table-striped">
                {ratedetails.map(ratedetail => (
                  <tr key={ratedetail.id}>
                    <td>{ratedetail.region}</td>
                    <td>{ratedetail.mcc}</td>

                    <td>
                      <div>
                        $
                        <input
                          style={{ width: '100px' }}
                          name="lowticketamt"
                          placeholder={parseFloat(ratedetail.lowticket).toFixed(
                            2
                          )}
                          id="lowticketamt"
                          onChange={this.onLowTicketAmtChange}
                        />
                      </div>
                    </td>

                    <td>
                      <div>
                        $
                        <input
                          style={{ width: '100px' }}
                          name="highticketamt"
                          placeholder={parseFloat(
                            ratedetail.highticket
                          ).toFixed(2)}
                          id="highticketamt"
                          onChange={this.onHighTicketAmtChange}
                        />
                      </div>
                    </td>

                    <td>
                      <div>
                        <input
                          style={{ width: '100px' }}
                          type="text"
                          name="avgrate"
                          placeholder={ratedetail.avgrate}
                          id="avgrate"
                          onChange={this.onAvgRateChange}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="col-md-2 mb-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleOnClick.bind(
                  this,
                  lowticketamt,
                  highticketamt,
                  avgrate
                )}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return <h4>Loading</h4>;
    }
  }
}

export default EditAvgRateRecord;
