import React, { Component } from 'react';

export class ClientDetails extends Component {
  render() {
    const { address, contact, job, general } = this.props.clientInfo.selectedItemDetail;

    return (
      <div>
        <img className="middle-img" src={general.avatar} alt="img"/>
        <div className="c-client-detail">
          <h1>{general.firstName} {general.lastName}</h1>
          <h3>{job.title} - {job.company}</h3>
          <h4>Address:</h4>
          <p>{address.street} {address.city}, {address.zipCode} {address.country}</p>
          <h4>Contact:</h4>
          <p>Phone: {contact.phone}</p>
          <p>email: {contact.email}</p>
        </div>
      </div>
    )
  }
}