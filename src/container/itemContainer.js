import React, { Component} from 'react'
import AddItem from "../component/addItem.js"
import { connect } from 'react-redux'
import * as Const from "../const.js"

class ItemContainer extends Component {


  render(){
    return (
      <div className="item-container">
        <AddItem />

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = {
  addAllItemsToStore: (all_items) => ({
    type:"ADD_ALL_ITEMS_TO_STORE", payload: all_items
  })

}



// export default ItemContainer
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
