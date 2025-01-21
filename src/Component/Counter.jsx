import React, { Component } from "react";

class Counter extends Component {
    constructor() { 
        super();
        this.state = {
            count:0,
            name:"mariem"
        }
    }
    increment=()=>{
        this.setState({
            ...this.state,
            count:this.state.count+1
        })
    }
    decrement=()=>{
        if(this.state.count>0){
            this.setState({
                ...this.state,
                count:this.state.count-1
            })
        }
    }
    reset=()=>{
        this.setState({
            ...this.state,
            count:0
        })
    }
    componentDidMount=()=>{
        console.log("counter did mount");

    }
    componentDidUpdate=()=>{
        console.log("counter did update");
    }
    componentWillUnmount=()=>{
        console.log("counter will unmount");
    }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "8px",
            width: "30%",
            gap: "5%",
            marginBottom: "3%",
          }}
        >
          <button
            style={{
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "red",
              color: "white",
            }}
            onClick={this.decrement}
          >
            -
          </button>
          <span style={{ fontSize: "1.5rem" }}>{this.state.count}</span>
          <button
            style={{
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "green",
              color: "white",
            }}
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <button
          style={{
            borderRadius: "8px",
            padding: "8px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={this.reset}
        >
          reset
        </button>
      </div>
    );
  }
}
export default Counter;
