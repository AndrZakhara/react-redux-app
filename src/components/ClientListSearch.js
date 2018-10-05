import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

export class ClientListSearch extends Component {

  render() {

    return(
      <div className='c-clients__form'>
        <Input icon='search' placeholder='Search...' onChange={e => this.props.setFilter(e.target.value)}  fluid/>
      </div>
    )
  }
}