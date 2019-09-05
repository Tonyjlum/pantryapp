import React, { Component} from 'react'
import QuantityChanger from "./quantityChanger.js"

class Item extends Component {
  state = {
    quantity: this.props.quantity
  }

  render(){
    return (
      <div className= "items-box">
        {this.props.name}
        <QuantityChanger quantity={this.props.quantity} id= {this.props.id}/>
      </div>
    )
  }

}

export default Item
