// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNum = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({
      count: num,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.randomNum}>
            Generate
          </button>
          <p className="count-num">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
