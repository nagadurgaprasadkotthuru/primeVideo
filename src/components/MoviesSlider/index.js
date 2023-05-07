// Write your code here
import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList, activeCategoryId} = props
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: false,
  }
  return (
    <div className="movies-slider-bg-container">
      <Slider {...settings}>
        {moviesList.map(eachMovie => {
          if (eachMovie.categoryId === activeCategoryId) {
            return <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
          }
          return null
        })}
      </Slider>
    </div>
  )
}

export default MoviesSlider
