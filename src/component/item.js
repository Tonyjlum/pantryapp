import React, { Component} from 'react'
import QuantityChanger from "./quantityChanger.js"

class Item extends Component {
  state = {
    quantity: this.props.quantity
  }

  updateQuantity = (quantity) => {
    this.setState({quantity: quantity}, ()=>{console.log(this.state)})
  }

  render(){
    return (
      <div className={this.state.quantity <= 1 ? "low-items-box" : "items-box"}>
        {this.props.name}
        <QuantityChanger
          quantity={this.props.quantity}
          id= {this.props.id}
          updateQuantity={this.updateQuantity}
        />
      </div>
    )
  }

}

export default Item
