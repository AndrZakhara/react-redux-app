import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export class ClientListSearch extends Component {
  render() {
    return(
      <div>
        <input type="text"
               placeholder="Search.."
               onChange={e => this.props.setFilter(e.target.value)}
        />
        <Icon name='search' />
      </div>
    )
  }
}