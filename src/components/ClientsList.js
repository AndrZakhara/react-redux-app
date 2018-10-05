import React, { Component }from 'react';
import ClientItem from './ClientItem';

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


