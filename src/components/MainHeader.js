import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

export class MainHeader extends Component {

  render() {

    return (
      <div className="l-header">
        <Icon name='users' circular />
        <h2 className="c-header_logo">Clients List App</h2>
      </div>
    )
  }
}
