import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class ClientListSearch extends Component {

  render() {

    return(
      <div className='c-clients__form'>
        <Input
          icon='search' 
          placeholder='Search...' 
          onChange={e => this.props.setFilter(e.target.value, this.props.itemList)} 
          fluid
        />
      </div>
    )
  }
}

ClientListSearch.propTypes = {
  itemList: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired
};