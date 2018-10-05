import React, { Component }from 'react';
import ClientItem from './ClientItem';

export class ClientsList extends Component {
  render() {
    const { filter, itemList, clickedItem, filteredList } = this.props.clientList;
    const client = filteredList.map((item) => {
      return(
        <ClientItem
          key={item.general.firstName + '_' + item.general.lastName}
          client={item}
          setActiveItem={this.props.setActiveItem}
        />
      )
    });
    return (
      client
    )
  }
}


