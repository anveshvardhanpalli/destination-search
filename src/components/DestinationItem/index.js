// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userData} = props
  const {imageUrl, name} = userData
  return (
    <div className="main-container">
      <h1>{name}</h1>
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  )
}

export default DestinationItem
