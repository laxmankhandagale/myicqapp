import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchAvgRateDetails2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratedetails: []
    };
  }

  async componentDidMount() {
    const { region, mcc, avgticketamt } = this.props.match.params;
    console.log(region + '...' + mcc);
    await axios
      .get(
        `http://localhost:4000/icqapi/searchavgratedetails/${region}/${mcc}/${avgticketamt}`
      )
      .then(response => this.setState({ ratedetails: response.data }));

    /*const ratedetails1 = [
      {
        id: 1,
        region: 'US',
        mcc: 3456,
        lowticket: 10.01,
        highticket: 20.01,
        avgrate: 2.34
      },
      {
        id: 1,
        region: 'US',
        mcc: 3456,
        lowticket: 10.01,
        highticket: 20.01,
        avgrate: 2.34
      }
    ];*/

    //this.setState({ ratedetails: ratedetails1 });
  }

  render() {
    const { ratedetails } = this.state;

    return (
      <div className="card card-body mb-2">
        <div className="form-group row">
          <label className="col-md-6">
            <h4>Avg Rate Search Results</h4>
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
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary">
            Download
          </button>
        </div>
      </div>

      //output
    );
  }
}

export default SearchAvgRateDetails2;
