import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isRunning: false, elapsedseconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerInterval)
  }

  onReset = () => {
    clearInterval(this.timerInterval)
    this.setState({isRunning: false, elapsedseconds: 0})
  }

  onStop = () => {
    clearInterval(this.timerInterval)
    this.setState({isRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({elapsedseconds: prevState.elapsedseconds + 1}))
  }

  onStart = () => {
    this.timerInterval = setInterval(this.updateTime, 1000)
    this.setState({isRunning: true})
  }

  renderSeconds = () => {
    const {elapsedseconds} = this.state
    const seconds = Math.floor(elapsedseconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {elapsedseconds} = this.state
    const minutes = Math.floor(elapsedseconds / 60)

    if (minutes === 0) {
      return '00'
    }
    if (minutes > 10 && minutes > 0) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <h1 className="title">StopWatch</h1>
        <div className="card-container">
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <h1 className="heading">Timer</h1>
          </div>
          <h1 className="time">{time}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn1"
              onClick={this.onStart}
              disabled={isRunning}
            >
              start
            </button>
            <button type="button" className="btn btn2" onClick={this.onStop}>
              stop
            </button>
            <button type="button" className="btn btn3" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
