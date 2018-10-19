import React, { Component } from 'react';
import axios from 'axios';

class SearchAvgRateDetailsDB extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    //this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4000/api/avgratedetailsall'
    );

    //    const res = await axios.get('https://jsonplaceholder.typicode.com/users/');

    console.log(response);
    this.setState({ data: response.data });
  }

  // handleClick() {
  // console.log('Test');
  // }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div>
          {data.map(d => (
            <h4>{d.lowticket}</h4>
          ))}
        </div>
      </div>
    );
  }
}
export default SearchAvgRateDetailsDB;

//<button className="button" onClick={this.handleClick}>
//Click Me
//</button>
