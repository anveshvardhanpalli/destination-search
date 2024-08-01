// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userData} = props
  const {imgUrl, name} = userData
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={imgUrl} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

export default DestinationItem
