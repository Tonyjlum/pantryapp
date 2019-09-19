import React, { Component } from 'react';
import { connect } from 'react-redux'

class MoveItemSelectButton extends Component {


  // makeOptions = () => {
  //   return this.props.currentLocation
  //   .filter( loc => loc.name !== "Cart")
  //   .map( loc => {
  //     return <option key={loc.id} id="currentlocation">{loc.name}</option>
  //   })
  // }



  render() {
      console.log(this.props)
    return (
      <span >
        <form className = "remove-cart-button" >
          <select>
          </select>
          <input type="submit" value= "move"/>
        </form>
      </span>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}


export default connect(mapStateToProps)(MoveItemSelectButton)
