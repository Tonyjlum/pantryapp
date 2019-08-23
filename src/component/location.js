import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as Const from "../const.js"

class Location extends Component {
  state = {}

  handleLocationClick = (location) => {
    console.log(location.id)
    const locationId = location.id
    this.props.addLocationToStore(locationId)
    fetch(`${Const.ENDPOINT}/location/${locationId}`)
    .then(resp => resp.json())
    .then(locationObj => this.props.addCurrentItemsToStore(locationObj.items))
  }


  render(props){
    return (
      <div onClick={ () => this.handleLocationClick(this.props.location)}>
        {<br/>}
        {this.props.location.name}
        {<br/>}
      </div>
    )
  }
}

// const mapStateToProps = (state) =>{
//   return {state}
// }

const mapDispatchToProps = {
  addLocationToStore: (currentLocation) => ({
    type:"UPDATE_CURRENT_LOCATION", payload: currentLocation
  }),
  addCurrentItemsToStore: (currentItems) => ({
    type:"UPDATE_CURRENT_ITEMS", payload: currentItems
  })
}



// export default Location
export default connect(null, mapDispatchToProps)(Location)
