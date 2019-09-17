import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as Const from "../const.js"

class Location extends Component {

  handleLocationClick = (location) => {
    const locationId = location.id
    this.props.addLocationToStore(locationId)
    fetch(`${Const.ENDPOINT}/location/${locationId}`)
    .then(resp => resp.json())
    .then(locationObj => this.props.addCurrentItemsToStore(locationObj.items))
  }

//change Cart to current location from redux

  render(props){
    return (
      <div
        onClick={ () => this.handleLocationClick(this.props.location)}>
        <div className={this.props.location.id == this.props.state.currentLocation ? 'current-location' : 'location-box'}>
          {this.props.location.name}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {state}
}

const mapDispatchToProps = {
  addLocationToStore: (currentLocation) => ({
    type:"UPDATE_CURRENT_LOCATION", payload: currentLocation
  }),
  addCurrentItemsToStore: (currentItems) => ({
    type:"UPDATE_CURRENT_ITEMS", payload: currentItems
  })
}



// export default Location
export default connect(mapStateToProps, mapDispatchToProps)(Location)
