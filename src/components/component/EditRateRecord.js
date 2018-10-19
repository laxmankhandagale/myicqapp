import React, { Component } from 'react';

class EditRateRecord extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: []
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    /*console.log('---id==' + id);
    await axios
      .get(`http://localhost:4000/icqapi/avgratedetails/${id}`)
      .then(response => this.setState({ ratedetails: response.data }));
*/

    const rateinfos = [
      {
        id: 1,
        region: 'US',
        cardbrand: 'DS',
        cardtype_chargetype: '30-1219',
        cardtypename: 'Disc Prem',
        cardplan: 'DSPM',
        interchange_description: 'PSL-Publc Services Premium'
      }
    ];

    this.setState({ ratedetails: rateinfos });
  }

  /*onAvgRateChange = e => {
    this.setState({ avgrate: e.target.value });
  };

  onLowTicketAmtChange = e => {
    this.setState({ lowticketamt: e.target.value });
  };

  onHighTicketAmtChange = e => {
    this.setState({ highticketamt: e.target.value });
  };*/

  render() {
    const { ratedetails } = this.state;

    return (
      <form>
        <div className="card card-body mb-1">
          <div className="form-row">
            <label className="col-md-6">
              <h4> Qualification Rate Details</h4>
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
                        //onChange={this.onLowTicketAmtChange}
                      />
                    </div>
                  </td>

                  <td>
                    <div>
                      $
                      <input
                        style={{ width: '100px' }}
                        name="highticketamt"
                        placeholder={parseFloat(ratedetail.highticket).toFixed(
                          2
                        )}
                        id="highticketamt"
                        //onChange={this.onHighTicketAmtChange}
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
                        // onChange={this.onAvgRateChange}
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
              /*onClick={this.handleOnClick.bind(
                this,
                lowticketamt,
                highticketamt,
                avgrate
              )}*/
            >
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default EditRateRecord;
