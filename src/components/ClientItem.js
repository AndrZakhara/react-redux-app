export default class ClientItem extends Component{

  render() {
    const { general, job } = this.props.client;
    const onSectionClick = (e) => {
      this.props.setActiveItem(this.props.client);
    };

    return(
      <div username="Christian Wuckert" onClick={e=>onSectionClick(e)}>
        <Image className='small-img' circular src={general.avatar} />
        <span>
        <Header as='h3'>{general.firstName} {general.lastName}</Header>
        <Header as='h4'>{job.title}</Header>
      </span>
      </div>
    );
  }
}