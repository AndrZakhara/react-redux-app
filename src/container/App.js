import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainHeader } from '../components/MainHeader';
import { ClientsList } from '../components/ClientsList';
import { ClientDetails } from '../components/ClientDetails';
import { ClientListSearch } from '../components/ClientListSearch';
import { setFilter, getClients } from '../actions/clientListAction';
import { setActiveItem } from '../actions/clientDetailActon';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    console.log(this.props);
    console.log(this.props.clientList.filterValue);
    const {
      clientList,
      clientDetail,
      setFilter,
      setActiveItem,
      isFetching,
      filterValue,
    } = this.props;

    return (
      <div className="App">
        <MainHeader />
        <div className="l-main">
          <div className="l-clients">
            <ClientListSearch
              setFilter={setFilter}
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
    setActiveItem: key => dispatch(setActiveItem(key)),
    getClients: () => dispatch(getClients()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



