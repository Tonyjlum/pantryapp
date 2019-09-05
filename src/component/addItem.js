import React, { Component} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Const from "../const.js"
import { connect } from 'react-redux'

const RESETSTATE = {
  name: "", quantity: 0, locations: [], currentlocation: "",
}

class AddItem extends Component {
  state = RESETSTATE

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleMapOfNewItem = (allitem) => {

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
    .then(response => response.json())
    .then( newitem => {


    })

    // set the new added item to redux

    this.setState({
        name: "", quantity: "0"
    })
  }
  //reset state to const after sussessful sub, add a toast to let uset know item added.
  //set up redux to handle returned item and update store

  makeOptions = () => {
    return this.state.locations.map( loc => {
      return <option key={loc} id="currentlocation">{loc}</option>
    })
  }

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location`)
    .then( resp => resp.json())
    .then( locations => {
      this.setState({
        locations: locations.map(loc => loc.name),
        currentlocation: locations[0].name
      })
    })
  }



  render(){
    return (
      <div id="add-item-form">
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label className="form-label" >Name</label>
        <input type= "text" id="name" value={this.state.name}required/>
        <label className="form-label" id="quantity">Quantity</label>
        <input type= "number" id="quantity" required/>
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

//read items and map over to return new item.

const mapStateToProps = (state) => {
  return {
    items: state.currentItems
  }
}

const mapDispatchToProps = {
  // addAllItemsToStore: (all_items) => ({
  //   type:"ADD_ALL_ITEMS_TO_STORE", payload: all_items
  // })

}


export default connect(mapStateToProps, mapDispatchToProps)(AddItem)
