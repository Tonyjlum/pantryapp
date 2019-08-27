import React, { Component} from 'react'
import * as Const from "../const.js"

class QuantityChanger extends Component {
  state = {
    quantity: this.props.quantity
  }

  //item only change after 2 clicks?

  handleDec = (id) => {
    this.setState({quantity: this.state.quantity - 1}, () => {this.updateQuantity(id)})
  }

  handleInc = (id) => {
    this.setState({quantity: this.state.quantity + 1}, () => {this.updateQuantity(id)})
  }

  updateQuantity = (id) => {
    console.log(this.state.quantity, "at the fetch")
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
  }


  render(){
    return (
      <div className="quantityChanger">
        <button onClick={() => this.handleDec(this.props.id)} > - </button>
        {this.state.quantity}
        <button onClick={() => this.handleInc(this.props.id)}> + </button>

      </div>
    )
  }

}

export default QuantityChanger
