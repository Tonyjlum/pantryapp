import React, { Component} from 'react'
import QuantityChanger from "./quantityChanger.js"

class Item extends Component {
  state = {
    quantity: this.props.quantity
  }

  //does not force a refresh, so red css border does not kick in.
  //update the store somehow.

  render(){
    return (
      <div className={this.props.quantity == 1 ? "low-items-box" : "items-box"}>
        {this.props.name}
        <QuantityChanger quantity={this.props.quantity} id= {this.props.id}/>
      </div>
    )
  }

}

export default Item
