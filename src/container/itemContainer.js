import React, { Component} from 'react'
import AddItem from "../component/addItem.js"

class ItemContainer extends Component {
  state = {}

  render(){
    return (
      <div className="item-container">
        <AddItem />

      </div>
    )
  }

}

export default ItemContainer
