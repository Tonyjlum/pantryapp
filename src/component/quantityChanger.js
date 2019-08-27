import React, { Component} from 'react'

class QuantityChanger extends Component {
  state = {
  }

  render(){
    return (
      <div className="quantityChanger">
        <button> - </button>
        {this.props.quantity}
        <button> + </button>

      </div>
    )
  }

}

export default QuantityChanger
