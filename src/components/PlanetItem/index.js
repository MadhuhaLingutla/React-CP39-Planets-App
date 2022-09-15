// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  const planetImageAlt = `planet ${name}`
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={planetImageAlt} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
