import React, { Component} from 'react'
import { connect } from 'react-redux'

class Location extends Component {
  state = {}

  handleLocationClick = (location) => {
    console.log(location.id)
    this.props.addLocationToStore(location.id)
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

const mapStateToProps = (state) =>{
  return {state}
}

const mapDispatchToProps = {
  addLocationToStore: (current_location) => ({type:"UPDATE_CURRENT_LOCATION", payload: current_location})
}



// export default Location
export default connect(mapStateToProps, mapDispatchToProps)(Location)
