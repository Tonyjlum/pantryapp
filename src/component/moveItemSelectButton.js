import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Const from "../const.js"

class MoveItemSelectButton extends Component {

  state = {
    moveLocation: "Pantry One",
    itemId: this.props.id,
    quantity: 1
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  makeOptions = () => {
    return this.props.locations
    .filter( loc => loc.name !== "Cart")
    .map( loc => {
      return <option key={loc.id} id="moveLocation">{loc.name}</option>
    })
  }

  handleUpdateStoreAfterMove = (id) => {
    return this.props.cart.filter( item => {
      return item.id !== id
    })
  }

  handleMove = (e) => {
    e.preventDefault()
    console.log(this.state)
    fetch(`${Const.ENDPOINT}/item/${this.state.itemId}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        quantity: this.state.quantity,
        location: this.state.moveLocation
      })
    })
    .then(this.props.moveItemFromCart(this.handleUpdateStoreAfterMove(this.state.itemId)))
  }


  render() {
      console.log(this.props)
    return (
      <span >
        <form className="float-right" onChange={this.handleChange} onSubmit={this.handleMove}>
          <input type ="number" id="quantity" className="small-input" min="1" value={this.state.quantity} required></input>
          <select id="moveLocation">
          {this.makeOptions()}
          </select>
          <button value= "move">move</button>
        </form>
      </span>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    cart: state.cart
  }
}

const mapDispatchToProps = {
  moveItemFromCart: (cartItems) => ({
    type: "UPDATE_CART_AFTER_CHANGE", payload: cartItems
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveItemSelectButton)
