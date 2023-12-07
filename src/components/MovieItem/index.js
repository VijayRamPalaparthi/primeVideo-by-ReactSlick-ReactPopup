// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MoviesItem = props => {
  const {object} = props
  const {thumbnailUrl, videoUrl} = object
  return (
    <div className="pop-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            <img
              src={thumbnailUrl}
              className="thumbnail-image"
              alt="thumbnail"
            />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <button
              className="button"
              type="button"
              onClick={close}
              data-testid="closeButton"
            >
              {/*  ram */}
              <IoMdClose size="30" />
            </button>

            <div className="responsive-container">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MoviesItem
