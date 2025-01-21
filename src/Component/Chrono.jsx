import React, { Component } from 'react'

class Chrono extends Component {
    constructor() {
        super();
        this.state = {
            timer:0
        }
    }
    starttimer=()=>{
        setInterval(() => {
            this.setState({timer :this.state.timer+1})
        }, 1000);
    }
    resettimer=()=>{
        this.setState({timer:0})
    }
    componentDidMount=()=>{
        this.starttimer();
    }
  render() {

    return (
      <div>
      <h2>{this.state.timer}</h2>
      <button onClick={this.resettimer} style={{
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "red",
              color: "white",
            }} >reset</button>
      </div>
    )
  }
}
export default Chrono;
