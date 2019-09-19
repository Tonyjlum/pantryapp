import React, { Component} from 'react'
import Location from '../component/location.js'
import * as Const from "../const.js"
import { connect } from 'react-redux'

class LocationContainer extends Component {

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location`)
    .then( resp => resp.json())
    .then( locations => {
      this.props.addLocationsToStore(locations)
    })
  }


  render_location = () => {
    return (this.props.locations.map( location =>{
      return (<Location key={location.id} location={location} />)
    }))
  }

  render(){
    return (
      <div className="location-container">
        {this.render_location()}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    locations: state.locations
  }
}

const mapDispatchToProps = {
  addLocationsToStore: (locations) => ({
    type:"ADD_LOCATIONS_TO_STORE", payload: locations
  })
}




export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)
