import React, { Component }from 'react';
import ClientItem from './ClientItem';
import PropTypes from 'prop-types';

export class ClientsList extends Component {

  render() {
    const { isFetching, filteredList } = this.props;

    const clientItem = filteredList.map((item) => {
      return(
        <ClientItem
          key={item.general.firstName + '_' + item.general.lastName}
          client={item}
          setActiveItem={this.props.setActiveItem}
        />
      )
    });

    if(isFetching) {

      return (
        <div>Loading...</div>
      )
    }
    else {

      return (
        clientItem
      )
    }
  }
}

ClientsList.propTypes = {
  filteredList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};