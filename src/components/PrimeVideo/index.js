// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  console.log(actionMoviesList)
  console.log(comedyMoviesList)

  return (
    <div className="page-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">
        <h1 className="movies-heading"> Action Movies </h1>
        <MoviesSlider slideList={actionMoviesList} />
      </div>

      <div className="movies-container">
        <h1 className="movies-heading"> Comedy Movies </h1>
        <MoviesSlider slideList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
