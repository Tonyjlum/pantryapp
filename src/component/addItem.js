import React, { Component} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Const from "../const.js"
import { connect } from 'react-redux'

class AddItem extends Component {
  state = {
    name: "", quantity: 1, currentlocation: "Pantry One",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${Const.ENDPOINT}/item`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        quantity: this.state.quantity,
        location: this.state.currentlocation
      })
    })
    .then( response => response.json())
    .then(item => {
      if (item.location_id == this.props.currentLocation) {
        this.props.updateCurrentListWithNewItem([...this.props.items, item])
      }
    })
    .then( something => this.setState({name: "", quantity: 1}))
  }

  makeOptions = () => {
    return this.props.locations
    .filter( loc => loc.name !== "Cart")
    .map( loc => {
      return <option key={loc.id} id="currentlocation">{loc.name}</option>
    })
  }

  render(){
    return (
      <div id="add-item-form">
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label className="form-label" >Name</label>
        <input type= "text" id="name" value={this.state.name} required/>
        <label
          className="form-label" id="quantity" >Quantity</label>
        <input type= "number" id="quantity" min="1" value={this.state.quantity} required />
        <label className="form-label" >Location</label>
        <select id="currentlocation">
          {this.makeOptions()}
        </select>
        <button className="form-label ">Add</button>
      </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.currentItems,
    currentLocation: state.currentLocation,
    locations: state.locations
  }
}

const mapDispatchToProps = {
  updateCurrentListWithNewItem: (new_list) => ({
    type:"UPDATE_CURRENT_ITEMS", payload: new_list
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
