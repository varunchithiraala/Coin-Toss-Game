// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossResultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let latestTossResultImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      latestTossResultImage =
        'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      latestHeadsCount += 1
    } else {
      latestTossResultImage =
        'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: latestTossResultImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="coin-toss-app-container">
        <div className="coin-toss-container">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="coin-toss-description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            className="coin-toss-image"
            alt="toss result"
          />
          <button
            className="coin-toss-button"
            onClick={this.onTossCoin}
            type="button"
          >
            Toss Coin
          </button>
          <div className="coin-toss-counts-container">
            <p className="coin-toss-count">Total: {totalCount}</p>
            <p className="coin-toss-count">Heads: {headsCount}</p>
            <p className="coin-toss-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
