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
    .then(cart => this.props.addCartFetchToStore(cart.items))
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
    return this.props.cart.
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
    currentLocation: state.currentLocation,
    cart: state.cart
  }
}

const mapDispatchToProps = {
  addCartFetchToStore: (cartItems) => ({
    type:"INITIAL_CART", payload: cartItems
  })
}



// export default ItemContainer
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
