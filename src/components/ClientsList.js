import React, { Component }from 'react';
import ClientItem from './ClientItem';
import PropTypes from 'prop-types';

export class ClientsList extends Component {

  render() {

    const { filteredList, isFetching } = this.props.clientList;
    const client = filteredList.map((item) => {

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
    } else {

      return (
        client
      )
    }
  }
}

ClientsList.propTypes = {
  clientList: PropTypes.shape({
    filteredList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }).isRequired,
  setActiveItem: PropTypes.func.isRequired,
};