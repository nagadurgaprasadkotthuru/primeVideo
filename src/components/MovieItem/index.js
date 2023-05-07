// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="slide-container">
      <Popup
        modal
        trigger={
          <button className="trigger-element" type="button">
            <img className="slide-image" alt="thumbnail" src={thumbnailUrl} />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer url={videoUrl} className="react-player" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
