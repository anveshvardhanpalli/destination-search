// Write your code here

import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputText: ''}

  onInputSearch = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {inputText} = this.state
    const filtereData = destinationsList.filter(item =>
      item.name.includes(inputText),
    )
    return (
      <div>
        <div className="sub-container">
          <h1>hii</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="search"
              value={inputText}
              onChange={this.onInputSearch}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="image-size"
            />
          </div>
          <div className="user-data">
            {filtereData.map(item => (
              <DestinationItem key={item.id} userData={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
