// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="slider-container" data-testid="planets">
      <h1>PLANETS</h1>

      <Slider {...settings}>
        {planetsList.map(arr => (
          <PlanetItem key={arr.id} arr={arr} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
