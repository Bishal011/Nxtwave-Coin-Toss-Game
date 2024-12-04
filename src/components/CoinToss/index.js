// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEAD_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAIL_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="head1">Coin Toss Game</h1>
          <p className="para1">Heads (or) Tails</p>
          <img className="img1" alt="toss result" src={tossResultImage} />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="para2">Total: {totalCount}</p>
            <p className="para2">Heads: {headsCount}</p>
            <p className="para2">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
