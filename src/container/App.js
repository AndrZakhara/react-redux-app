import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../components/MainHeader';
// import { Container } from 'semantic-ui-react';
import { ClientsList } from '../components/ClientsList';
import { ClientDetails } from '../components/ClientDetails';
import { ClientListSearch } from '../components/ClientListSearch';
import { setFilter, setDefaultStore } from '../actions/clientListAction';
import './App.css';

export class App extends Component {
  render() {
    const {clientList, clientDetail, setFilter, setDefaultStore} = this.props;

    return (
      <div className="App">
        <MainHeader />
        <div className="l-main">
          <div className="l-clients">
            <ClientListSearch
              setFilter={setFilter}
              setDefaultStore={setDefaultStore}
            />
            <ClientsList
              clientList={clientList}
            />
          </div>
          <ClientDetails
            clientInfo={clientDetail}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    clientDetail: store.clientDetail,
    clientList: store.clientList,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilter(filter)),
    setDefaultStore: filter => dispatch(setDefaultStore(filter)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



