
import React, { Component } from 'react'
import Counter from './Component/Counter'
import Chrono from './Component/Chrono';

 class App extends Component {
  constructor(){
    super();
  this.state={
    show:false

  }}
  displaycounter=()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>workshop state</h1>
        { this.state.show==true?<Counter/>:null}
        {this.state.show==true?<Chrono/>:null}
        <button onClick={this.displaycounter} style={{padding:"10px",background:"brown",borderRadius:"10px",marginTop:"3%"}}>{this.state.show==true?"hide":"show"}</button>
      </div>
    )
  }
}
export default App
