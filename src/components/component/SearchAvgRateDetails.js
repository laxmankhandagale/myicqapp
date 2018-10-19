import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import DropDownMenu from './DropDownMenu';

class SearchAvgRateDetails extends Component {
  static defaultProps = {
    regions: ['All', 'US', 'CA', 'UK'],
    mcclist: ['All', '1456', '24334', '3232']
  };

  render() {
    let regionsList = this.props.regions.map(region => {
      return (
        <option key={region} value="region">
          {region}
        </option>
      );
    });
    let mccList1 = this.props.mcclist.map(mcc => {
      return (
        <option key={mcc} value="mcc">
          {mcc}
        </option>
      );
    });

    const ratedetails = [
      {
        id: 1,
        region: 'US',
        mcc: '1234',
        lowticket: '10',
        highticket: '20',
        avgrate: 1.45
      },
      {
        id: 2,
        region: 'US',
        mcc: '1234',
        lowticket: '21',
        highticket: '30',
        avgrate: 2.45
      }
    ];
    return (
      <form>
        <h4>Qualification Avg Rate Details Search</h4>
        <div className="card card-body mb-1">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label"> Region</label>
            <div className="col-sm-10">
              <select style={{ width: '150px' }} ref="region">
                {regionsList}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">MCC</label>
            <div className="col-sm-10">
              <select style={{ width: '150px', margin: 'auto' }} ref="mcc">
                {mccList1}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Avg Ticket Amount</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Enter ticket amount" />
            </div>
          </div>
          <div className="form-group row">
            <button type="submit" class="btn btn-primary mb-1">
              Search
            </button>
          </div>
        </div>
        <div className="card card-body mb-2">
          <div className="form-group row">
            <label className="col-sm-2">
              <h4>Search Results</h4>
            </label>
            <div className="col-md-1">
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
            <div className="col-md-1">
              <button type="submit" class="btn btn-primary">
                Download
              </button>
            </div>
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
                    <Link to="/" className="btn btn-secondary btn-sm">
                      <i className="fas fas-arrow-circle-right" /> Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
      //output
    );
  }
}

export default SearchAvgRateDetails;
