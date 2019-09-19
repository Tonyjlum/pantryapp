import React, { Component} from 'react'
import * as Const from "../const.js"
import { connect } from 'react-redux'

class QuantityChanger extends Component {
  state = {
    quantity: this.props.quantity
  }

  handleRender = () => {
    if (this.state.quantity > 0) {
      return(
        <div className = "float-right">
          <button onClick={() => this.handleDec(this.props.id)} > - </button>
              {this.state.quantity > 9 ? this.state.quantity : "0" + this.state.quantity}
          <button onClick={() => this.handleInc(this.props.id)}> + </button>
        </div>
      )
    } else {
      return <span>  was added to the cart.</span>
    }
  }

  handleDec = (id) => {
    this.setState({quantity: this.state.quantity - 1}, () => {this.updateQuantity(id)})
  }

  handleInc = (id) => {
    this.setState({quantity: this.state.quantity + 1}, () => {this.updateQuantity(id)})
  }

  updateQuantity = (id) => {
    this.props.updateQuantity(this.state.quantity)
    fetch(`${Const.ENDPOINT}/item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        quantity: this.state.quantity
      })
    })
    .then(item => item.json())
    .then(item => this.props.addCartFetchToStore(item))
  }

  render(){
    return (
      <span >
        {this.handleRender()}
      </span>
    )
  }
}

const mapDispatchToProps = {
  addCartFetchToStore: (cartItems) => ({
    type:"ADDED_TO_CART", payload: cartItems
  })
}


export default connect(null, mapDispatchToProps)(QuantityChanger)
