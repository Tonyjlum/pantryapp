import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as Const from "../const.js"

class Cart extends Component {
//cart can delete items as well as move to a location(item bought)

  render(props){
    return (
      <div>

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
