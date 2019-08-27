import React, { Component} from 'react'
import AddItem from "../component/addItem.js"
import Item from "../component/item.js"
import { connect } from 'react-redux'
import * as Const from "../const.js"

class ItemContainer extends Component {
  state = {
    currentLocation: 0,
    currentItems: this.props.items
  }

  populateCurrentItems = () => {
    return this.props.items.map( item => {
      return <Item key={item.id} name={item.name} quantity={item.quantity}/>
    })
    console.log("poping")
  }

  render(){
    return (
      <div className="item-container">
        <AddItem />
        {this.populateCurrentItems()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.currentItems
  }
}

const mapDispatchToProps = {
  addAllItemsToStore: (all_items) => ({
    type:"ADD_ALL_ITEMS_TO_STORE", payload: all_items
  })

}



// export default ItemContainer
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
