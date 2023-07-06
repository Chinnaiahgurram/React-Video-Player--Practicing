import {Component} from 'react'
import './index.css'
import ReactPlayer from 'react-player'

const url = 'https://www.youtube.com/watch?v=Wq22t5FvlQY'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'pause' : 'play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url={url}
            playing={isPlaying}
            light=<img
              src="https://res.cloudinary.com/dpb6spuxz/image/upload/v1668146297/CHINNA_1_kafkb6.jpg"
              width="300"
              alt="Thumbnail"
            />
            controls
          />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
