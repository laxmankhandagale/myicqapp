import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import EditAvgRateRecord from './EditAvgRateRecord';
import axios from 'axios';

class AvgRateSheetDetails extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: []
    };
  }

  async componentDidMount() {
    const response = await axios
      .get('http://localhost:4000/icqapi/avgratedetailsall')
      .then(response => this.setState({ ratedetails: response.data }));
    /* const ratedetails1 = [
      {
        id: 1,
        region: 'US',
        mcc: 3456,
        lowticket: 10.01,
        highticket: 20.01,
        avgrate: 2.34
      },
      {
        id: 2,
        region: 'US',
        mcc: 3456,
        lowticket: 10.01,
        highticket: 20.01,
        avgrate: 2.34
      }
    ];*/
    //console.log(response);
    //this.setState({ ratedetails: response.data });
    //this.setState({ ratedetails: ratedetails1 });
  }

  render() {
    const { ratedetails } = this.state;
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
                  <th />
                </tr>
              </thead>
              <tbody className="table table-striped">
                {ratedetails.map(ratedetail => (
                  <tr key={ratedetail.id}>
                    <td>{ratedetail.region}</td>
                    <td>{ratedetail.mcc}</td>
                    <td>${parseFloat(ratedetail.lowticket).toFixed(2)}</td>
                    <td>${parseFloat(ratedetail.highticket).toFixed(2)}</td>
                    <td>{ratedetail.avgrate}</td>
                    <td>
                      <Link
                        to={`/component/EditAvgRateRecord/${ratedetail.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fas fas-arrow-circle-right" /> Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-1">
            <button type="submit" className="btn btn-primary">
              Download
            </button>
          </div>
        </form>
      );
    } else {
      return <h4>Loading</h4>;
    }
  }
}

export default AvgRateSheetDetails;
