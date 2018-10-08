import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainHeader } from '../components/MainHeader';
import { ClientsList } from '../components/ClientsList';
import { ClientDetails } from '../components/ClientDetails';
import { ClientListSearch } from '../components/ClientListSearch';
import { setFilter, setDefaultStore, getClients } from '../actions/clientListAction';
import { setActiveItem } from '../actions/clientDetailActon';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.setDefaultStore()
    this.props.getClients();
  }

  render() {    
    const {
      clientList,
      clientDetail,
      setFilter,
      setDefaultStore,
      setActiveItem,
      isFetching,
    } = this.props;

    return (
      <div className="App">
        <MainHeader />
        <div className="l-main">
          <div className="l-clients">
            <ClientListSearch
              setFilter={setFilter}
              setDefaultStore={setDefaultStore}
              itemList={clientList.itemList}
            />
            <ClientsList
              clientList={clientList}
              setActiveItem={setActiveItem}
              isFetching={isFetching}
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

  return {
    clientDetail: store.clientDetail,
    clientList: store.clientList,
  }
};

const mapDispatchToProps = dispatch => {

  return {
    setFilter: (filterValue, itemList) => dispatch(setFilter(filterValue, itemList)),
    setDefaultStore: filterValue => dispatch(setDefaultStore(filterValue)),
    setActiveItem: key => dispatch(setActiveItem(key)),
    getClients: () => dispatch(getClients()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



