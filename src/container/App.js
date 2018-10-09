import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainHeader } from '../components/MainHeader';
import { ClientsList } from '../components/ClientsList';
import { ClientDetails } from '../components/ClientDetails';
import { ClientListSearch } from '../components/ClientListSearch';
import { setFilter, getClients } from '../actions/clientListAction';
import { setActiveItem } from '../actions/clientDetailActon';
import { getFilteredItemsList } from '../selectors/getFilteredItemsListSelector'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    const {
      clientList,
      clientDetail,
      setFilter,
      setActiveItem,
      filteredList,
    } = this.props;

    return (
      <div className="App">
        <MainHeader />
        <div className="l-main">
          <div className="l-clients">
            <ClientListSearch
              setFilter={setFilter}
            />
            <ClientsList
              filteredList={filteredList}
              setActiveItem={setActiveItem}
              isFetching={clientList.isFetching}
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
    filteredList: getFilteredItemsList(store),
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



