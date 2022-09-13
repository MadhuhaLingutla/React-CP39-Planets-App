// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planets-display-container">
      <h1 className="planet-heading">PLANETS</h1>
      <div className="slider-container" testid="planets">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
