import { connect } from 'react-redux';
import Media from '../components/media';
import React, { Component } from 'react';

class MediaContainer extends Component {
  render(){
    return <Media {...this.props.data.toJS()}/>
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps) (MediaContainer);
