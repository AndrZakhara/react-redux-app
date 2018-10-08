import React, { Component }from 'react';
import ClientItem from './ClientItem';

export class ClientsList extends Component {

  render() {
    const { itemList, isFetching } = this.props.clientList;
    const clientItem = itemList.map((item) => {

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
        clientItem
      )
    }
  }
}