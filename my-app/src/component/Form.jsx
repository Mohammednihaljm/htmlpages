import React, { Component } from 'react'

export default class Form extends Component {

 state={
  firstname:"",
  lastname:""
 }; 

  onChangeHandler=(event)=>{
    this.setState({
     [event.target.name]:event.target.value,
    })
  }
  onSubmit=()=>{
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input type='text' name='firstname' value={this.state.firstname} onChange={this.onChangeHandler}></input>
        <input type='text'  name='lastname' value={this.state.lastname} onChange={this.onChangeHandler}></input>
        <button type='button' onClick={this.onSubmit}>submit</button>
 
      </form>
    )
  }
}
