import React, { Component} from 'react'
import Location from '../component/location.js'
import * as Const from "../const.js"

class LocationContainer extends Component {
  state = {
    locations: []
  }

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location`)
    .then( resp => resp.json())
    .then( locations => {
      console.log(locations)
      this.setState({
        locations: locations
      })
    })
  }


  render_location = () => {
    return (this.state.locations.map( location =>{
      return (<Location key={location.id} location={location} />)
    }))
  }

  render(){
    return (
      <div>
        {this.render_location()}
      </div>
    )
  }

}

export default LocationContainer
