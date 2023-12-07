// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {slideList} = props
  const settings = {slidesToShow: 4, slidesToScroll: 1}
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slideList.map(each => (
          <MovieItem object={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default MoviesSlider
