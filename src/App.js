import React, { Component } from 'react';
import AppNavBar from './components/layout/AppNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import LeftPanelDetails from './components/layout/LeftPanelDetails';
import LeftPanel1 from './components/layout/LeftPanel1';
import AvgRateSheetDetails from './components/component/AvgRateSheetDetails';
import SearchAvgRateDetails1 from './components/component/SearchAvgRateDetails1';
import UploadFile from './components/component/UploadFile';
import SearchRateDetails from './components/component/SearchRateDetails';
import RateSheetDetails from './components/component/RateSheetDetails';
import About from './components/component/About';
import LoginPage from './components/component/LoginPage';
import RegisterUser from './components/component/RegisterUser';
import SearchAvgRateDetails2 from './components/component/SearchAvgRateDetails2';
import EditAvgRateRecord from './components/component/EditAvgRateRecord';
import SearchRateDetailsResults from './components/component/SearchRateDetailsResults';
import EditRateRecord from './components/component/EditRateRecord';
import RateDetailsDisplay from './components/component/RateDetailsDisplay';
import EditRateRecordDetails from './components/component/EditRateRecordDetails';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddAvgRateRecords from './components/component/AddAvgRateRecords';
import AddNewRateRecord from './components/component/AddNewRateRecord';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavBar />
          <div>
            <Switch>
              <Route exact path="/" component={LeftPanel1} />
              <Route
                exact
                path="/component/AvgRateSheetDetails"
                component={AvgRateSheetDetails}
              />
              <Route
                exact
                path="/component/SearchAvgRateDetails1"
                component={SearchAvgRateDetails1}
              />
              <Route
                exact
                path="/component/UploadFile"
                component={UploadFile}
              />
              <Route
                exact
                path="/component/SearchRateDetails"
                component={SearchRateDetails}
              />
              <Route
                exact
                path="/component/SearchAvgRateDetails2/:region/:mcc/:avgticketamt"
                component={SearchAvgRateDetails2}
              />

              <Route
                exact
                path="/component/SearchRateDetailsResults/:region/:cardtype/:chargetype/:mcc/:icdesc"
                component={SearchRateDetailsResults}
              />

              <Route
                exact
                path="/component/EditAvgRateRecord/:id"
                component={EditAvgRateRecord}
              />
              <Route
                exact
                path="/component/RateDetailsDisplay/:id"
                component={RateDetailsDisplay}
              />
              <Route
                exact
                path="/component/EditRateRecordDetails/:id"
                component={EditRateRecordDetails}
              />

              <Route
                exact
                path="/component/EditRateRecord/:id"
                component={EditRateRecord}
              />

              <Route
                exact
                path="/component/RateSheetDetails"
                component={RateSheetDetails}
              />
              <Route exact path="/component/LoginPage" component={LoginPage} />
              <Route
                exact
                path="/component/RegisterUser"
                component={RegisterUser}
              />

              <Route exact path="/component/About" component={About} />

              <Route
                exact
                path="/component/AddAvgRateRecords"
                component={AddAvgRateRecords}
              />
              <Route
                exact
                path="/component/AddNewRateRecord"
                component={AddNewRateRecord}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
