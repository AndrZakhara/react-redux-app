import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class ClientDetails extends Component {
  render() {
    console.log(this.props);
    const { address, contact, job, general } = this.props.clientInfo.selectedItemDetail;

    if(
      Object.keys(this.props.clientInfo.selectedItemDetail).length === 0 &&
      this.props.clientInfo.selectedItemDetail.constructor === Object
    ) {
      return (
        <div className="c-client-detail">
          <Header >To see detailed information, select client.</Header>
        </div>
      )
    }
    else {
      return (
        <div className="c-client-detail">
          <img className="c-client-detail__avatar" src={general.avatar} alt="img" />
          <div className="c-client-detail__info">
            <h1>{general.firstName} {general.lastName}</h1>
            <h5>{job.title} - {job.company}</h5>
            <h4>Address:</h4>
            <p>{address.street} {address.city}, {address.zipCode} {address.country}</p>
            <h4>Contact:</h4>
            <p>Phone: {contact.phone || 'information not found'}</p>
            <p>email: {contact.email || 'information not found'}</p>
          </div>
        </div>
      )
    }
  }
}

ClientDetails.propTypes = {
  clientInfo: PropTypes.shape({

    selectedItemDetail: PropTypes.shape({

      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
      }),

      contact: PropTypes.shape({
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }),

      job: PropTypes.shape({
        title: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired
      }),

      general: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      })
    })
  })
};