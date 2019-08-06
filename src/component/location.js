import React, { Component} from 'react'

class Location extends Component {
  state = {}

  render(props){
    return (
      <div>
        {this.props.location.name}
      </div>
    )
  }

}

export default Location
