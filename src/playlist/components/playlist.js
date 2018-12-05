import './playlist.css';
import React from 'react';
import MediaContainer from '../containers/media'

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map((mediaId) => {
          return <MediaContainer openModal={props.handleOpenModal} id={mediaId} key={mediaId} />
        })
      }
    </div>
  )
}

export default Playlist;
