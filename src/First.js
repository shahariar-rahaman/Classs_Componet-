import React, { Component,createRef } from 'react'

export default class First extends Component {
    constructor(){
        super()
        this.state = {
            count:0,
            render: ""
        }
        this.inputRef = createRef()
        console.log("Constructor")
    }
    componentDidMount(){
        this.inputRef.current.style.color = "red"
        console.log("From Component Did Mount")
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update")
        console.log(`Previous State ${prevState.count}`)
        console.log(`Previous Props ${prevProps.currentNumber}`)
        
        console.log(`Snapshot ${snapshot}`)
    }
    componentWillUnmount(){
        console.log("Componet Will Unmount")
    }
    getSnapshotBeforeUpdate(){
        console.log("Get Snapshot Before Update")
        return this.state.count
    }
    shouldComponentUpdate(){
        console.log("Should Component Update")
        return true
    }

  render() {
    return (
      <>
      <div>{this.state.render}</div>
      {console.log('From Render')}
      <h1 ref={this.inputRef}>State: {this.state.count}</h1>
      <button onClick={()=> this.setState({count:this.state.count+1,render:this.state.render+"Render"})}>Click</button>
      </>
    )
  }
}
