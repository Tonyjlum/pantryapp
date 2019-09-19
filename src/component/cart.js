import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as Const from "../const.js"
import MoveItemSelectButton from './moveItemSelectButton.js'

class Cart extends Component {
//cart can delete items as well as move to a location(item bought)
  state = {
    deleted: false
  }

  makeOptions = () => {
    return this.state.locations
    .filter( loc => loc.name !== "Cart")
    .map( loc => {
      return <option key={loc.id} id="currentlocation">{loc.name}</option>
    })
  }

  handleDelete = (id) => {
    fetch(`${Const.ENDPOINT}/item/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then( this.props.updateCartAfterDelete(this.handleUpdateStoreAfterDelete(id)))
    .then( something => this.setState({deleted: true}))
  }

  handleUpdateStoreAfterDelete = (id) => {
    return this.props.cart.filter( item => {
      return item.id !== id
    })
  }

  removeButton = () => {
    return this.state.deleted ? `${this.props.name} has been removed from Cart.` :  <button onClick = {() => this.handleDelete(this.props.id)}>X</button>
  }

  //render move form and button, both will be gone if any one is done.


  render(){
    return (
      <div className= {this.state.deleted ? "low-items-box" : "items-box"}>
      {this.removeButton()}
        {!this.state.deleted && this.props.name}
        {!this.state.deleted && <MoveItemSelectButton id={this.props.id}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {cart: state.cart}
}

const mapDispatchToProps = {
  updateCartAfterDelete: (items) =>({
    type: "UPDATE_CART_AFTER_CHANGE", payload: items
  })
}



// export default Location
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
