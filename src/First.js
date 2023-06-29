import React, { Component } from 'react'

export default class First extends Component {
    constructor(){
        super()
        this.state = {
            count:0,
            render: ""
        }
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("From Component Did Mount")
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update")
        console.log(`Previous State ${prevState.count}`)
        console.log(`Previous Props ${prevProps.currentNumber}`)
        
        console.log(`Snapshot ${snapshot}`)
    }
    getSnapshotBeforeUpdate(){
        console.log("Get Snapshot Before Update")
        return this.state.count
    }
    shouldComponentUpdate(){
        console.log("Should Component Update")
        return true
    }
    componentWillUnmount(){
        console.log("Componet Will Unmount")
    }
  render() {
    return (
      <>
      <div>{this.state.render}</div>
      {console.log('From Render')}
      <h1>State: {this.state.count}</h1>
      <button onClick={()=> this.setState({count:this.state.count+1,render:this.state.render+"Render"})}>Click</button>
      </>
    )
  }
}
