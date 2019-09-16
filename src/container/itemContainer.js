import React, { Component} from 'react'
import AddItem from "../component/addItem.js"
import Item from "../component/item.js"
import Cart from "../component/cart.js"
import { connect } from 'react-redux'
import * as Const from "../const.js"

class ItemContainer extends Component {
  state = {
    currentLocation: 0,
    currentItems: this.props.items,
    cartItems: []
  }

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location/1`)
    .then(resp => resp.json())
    .then(location => this.setState({
      cartItems: location.items
    }))
  }


  populateCurrentItems = () => {
    return this.props.items
    .sort((a,b) => a.name.localeCompare(b.name))
    .filter( item => item.quantity >= 1)
    .map( item => {
      return <Item key={item.id} name={item.name} quantity={item.quantity} id={item.id} />
    })
  }

  populateCart = () => {
    return this.state.cartItems.
    sort((a,b) => a.name.localeCompare(b.name))
    .filter( item => item.quantity < 1)
    .map( item => {
      return <Cart key={item.id} name={item.name} quantity={item.quantity} id={item.id} />
        })
    }

  render(){
    return (
      <div className="item-container">
        <AddItem />
        {this.props.currentLocation == 1 ? this.populateCart() : this.populateCurrentItems()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.currentItems,
    currentLocation: state.currentLocation
  }
}

const mapDispatchToProps = {
  // addAllItemsToStore: (all_items) => ({
  //   type:"ADD_ALL_ITEMS_TO_STORE", payload: all_items
  // })

}



// export default ItemContainer
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
