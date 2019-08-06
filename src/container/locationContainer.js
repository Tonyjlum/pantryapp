import React, { Component} from 'react'

class LocationContainer extends Component {
  state = {

  }

  componentDidMount(){
    fetch("http://localhost:9000/location")
    .then( resp => resp.json())
    .then( locations => {
      console.log(locations)
      this.setState({
        locations: locations
      })
    })
  }

  render(){
    return (
      <div>
        {this.state.locations}
      </div>
    )
  }

}

export default LocationContainer
