// Write your code her
import './index.css'

const PlanetItem = props => {
  const {arr} = props

  const {name, description, imageUrl} = arr
  const newname = `planet ${name}`
  return (
    <div>
      <div className="divEl">
        <img src={imageUrl} alt={newname} />
      </div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
