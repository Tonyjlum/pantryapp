import React, { Component} from 'react'
import AddItem from "../component/addItem.js"
import { connect } from 'react-redux'
import * as Const from "../const.js"

class ItemContainer extends Component {


  componentDidMount(){
    fetch(`${Const.ENDPOINT}/item`)
    .then( resp => resp.json())
    .then( items => this.props.addAllItemsToStore(items))
  }

  //show items based on the store location state.


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
