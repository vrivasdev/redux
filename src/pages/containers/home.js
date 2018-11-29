import { connect } from 'react-redux';
import React, { Component } from 'react';
import Related from '../components/related';
import Modal from '../../widgets/components/modal';
import HomeLayout from '../components/home-layout';
import ModalContainer from '../../widgets/containers/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import Categories from '../../categories/components/categories';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}
// It will return the mapped state and props data to the component
function mapStateToProps(state, props) {
  return {
    categories: state.data.categories // Component call: this.props.categories
  }
}

/* NOTE: connect state data to component. I'll send propierties and state to component */
export default connect(mapStateToProps)(Home)
