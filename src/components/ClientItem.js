import React from 'react';
import { Header, Image } from 'semantic-ui-react';

export default function ClientItem (props) {
  const { general, job } = props.client;
  return(
    <div>
      <Image className='small-img' circular src={general.avatar} />
      <span>
        <Header as='h3'>{general.firstName} {general.lastName}</Header>
        <Header as='h4'>{job.title}</Header>
      </span>
    </div>
  );
}


