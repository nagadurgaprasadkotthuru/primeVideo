// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="bg-container">
      <img
        className="banner-image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="sliders-container">
        <h1 className="sub-heading">Action Movies</h1>
        <MoviesSlider moviesList={moviesList} activeCategoryId="ACTION" />
        <h1 className="sub-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={moviesList} activeCategoryId="COMEDY" />
      </div>
    </div>
  )
}

export default PrimeVideo
