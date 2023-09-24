// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  // eslint-disable-next-line
  state = {isTrue: false}

  changeState = () => {
    this.setState(pervState => ({isTrue: !pervState.isTrue}))
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank You! Happy Learning</p>
        </div>
        {isTrue && (
          <button
            type="button"
            onClick={this.changeState}
            className="button-styling"
          >
            Subscribed
          </button>
        )}
        {!isTrue && (
          <button
            type="button"
            onClick={this.changeState}
            className="button-styling"
          >
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
