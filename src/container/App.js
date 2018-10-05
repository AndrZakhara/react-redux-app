import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../components/MainHeader';
// import { Container } from 'semantic-ui-react';
import { ClientsList } from '../components/ClientsList';
import { ClientDetails } from '../components/ClientDetails';
import { ClientListSearch } from '../components/ClientListSearch';
import { setFilter, setDefaultStore } from '../actions/clientListAction';
import { setActiveItem } from '../actions/clientDetailActon';
import './App.css';

class App extends Component {
  componentDidMount() {
    if (this.props.clientList.filter === '') {
      this.props.setDefaultStore()
    }
  }
  render() {
    // console.log(this.props);
    const {clientList, clientDetail, setFilter, setDefaultStore, setActiveItem} = this.props;

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
              setActiveItem={setActiveItem}
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
    setActiveItem: key => dispatch(setActiveItem(key)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



