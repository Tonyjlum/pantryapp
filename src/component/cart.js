import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as Const from "../const.js"

class Cart extends Component {
//cart can delete items as well as move to a location(item bought)
  state = {
    deleted: false
  }

  makeOptions = () => {
    return this.state.locations
    .filter( loc => loc.name !== "Cart")
    .map( loc => {
      return <option key={loc.id} id="currentlocation">{loc.name}</option>
    })
  }

  handleDelete = (id) => {
    fetch(`${Const.ENDPOINT}/item/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      }
    })
    .then( something => this.setState({deleted: true}))
  }

  handleRender = () => {
    return this.state.deleted ? "Gone" : "Still kickin it"
  }

  removeButton = () => {
    return this.state.deleted ? " has been removed from Cart." :  <button className="remove-cart-button"onClick = {() => this.handleDelete(this.props.id)}>Remove!?</button>
  }
  moveToLocation = () => {

  }
  //render move form and button, both will be gone if any one is done.


  render(){
    return (
      <div className= {this.state.deleted ? "low-items-box" : "items-box"}>
        {this.props.name}
        {this.removeButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {state}
}

const mapDispatchToProps = {
  //new items added back to locations should update redux

  // addLocationToStore: (currentLocation) => ({
  //   type:"UPDATE_CURRENT_LOCATION", payload: currentLocation
  // }),
  // addCurrentItemsToStore: (currentItems) => ({
  //   type:"UPDATE_CURRENT_ITEMS", payload: currentItems
  // })
}



// export default Location
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
