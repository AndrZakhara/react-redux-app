import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class ClientItem extends Component{

  render() {
    const { general, job } = this.props.client;

    return(
      <div className="c-item" onClick={e=>this.props.setActiveItem(this.props.client)}>
        <Image className = "c-item__avatar" avatar circular src={general.avatar} verticalAlign='middle' />
        <span>
          <h5>{general.firstName} {general.lastName}</h5>
          <span>{job.title}</span>
        </span>
      </div>
    );
  }
}

ClientItem.propTypes = {
  client: PropTypes.shape({

    job: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,

    general: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,

  setActiveItem: PropTypes.func.isRequired
};