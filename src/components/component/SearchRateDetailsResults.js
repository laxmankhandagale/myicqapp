import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchRateDetailsResults extends Component {
  constructor() {
    super();
    this.state = {
      ratedetails: []
    };
  }

  async componentDidMount() {
    const {
      region,
      mcc,
      chargetype,
      cardtype,
      icdesc
    } = this.props.match.params;
    console.log(region + '...' + mcc);
    await axios
      .get(
        `http://localhost:4000/icqapi/searchratedetails/${region}/${cardtype}/${chargetype}/${mcc}/${icdesc}`
      )
      .then(response => this.setState({ ratedetails: response.data }));

    /*const rateinfos = [
      {
        id: 1,
        region: 'US',
        cardbrand: 'DS',
        cardtype_chargetype: '30-1219',
        cardtypename: 'Disc Prem',
        cardplan: 'DSPM',
        interchange_description: 'PSL-Publc Services Premium'
      },
      {
        id: 2,
        region: 'US',
        cardbrand: 'DS',
        cardtype_chargetype: '31-1219',
        cardtypename: 'Disc Plus',
        cardplan: 'DSPP',
        interchange_description: 'PSL-Publc Services Premium Plus'
      }
    ];*/

    // this.setState({ ratedetails: rateinfos });
  }

  render() {
    const { ratedetails } = this.state;

    return (
      <div className="card card-body mb-2">
        <div className="form-group row">
          <label className="col-md-6">
            <h4>Rate Search Results</h4>
          </label>
        </div>
        <table className="table table-striped">
          <thead className="thead-inverse">
            <tr>
              <th>Region</th>
              <th>Card Brand</th>
              <th>CardType-ChargeType</th>
              <th>CardType Name</th>
              <th>Card plan</th>
              <th>Interchange Description</th>
              <th />
            </tr>
          </thead>
          <tbody className="table table-striped">
            {ratedetails.map(rateinfo => (
              <tr key={rateinfo.id}>
                <td>{rateinfo.region}</td>
                <td>{rateinfo.card_brand}</td>
                <td>{rateinfo.card_charge_type}</td>
                <td>{rateinfo.card_type_name}</td>
                <td>{rateinfo.card_plan}</td>
                <td>{rateinfo.interchange_description}</td>
                <td>
                  <Link
                    to={`/component/RateDetailsDisplay/${rateinfo.id}`}
                    className="btn btn-secondary btn-sm"
                  >
                    <i className="fas fas-arrow-circle-right" /> Details
                  </Link>{' '}
                  <Link
                    to={`/component/EditRateRecordDetails/${rateinfo.id}`}
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

export default SearchRateDetailsResults;
