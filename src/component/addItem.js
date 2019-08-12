import React, { Component} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Const from "../const.js"

class AddItem extends Component {
  state = {
    name: "",
    quantity: 0,
    locations: ["t1","t2"],
    fill: null
  }

  // handleChange = (e) => {
  //   console.log(e.target.id)
  //   this.setState({
  //     [e.taget.id]: e.target.value
  //   }, function () { console.log(this.state)})
  // }

  makeOptions = () => {
    return this.state.locations.map( loc => {
      return <option key={loc}>{loc}</option>
    })
  }

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location`)
    .then( resp => resp.json())
    .then( locations => {
      this.setState({
        locations: locations.map(loc => loc.name)
      })
    })
  }


  render(){
    return (
      <div>
      <form onChange={this.handleChange}>
        <label className="form-label" >Name</label>
        <input type= "text" id="name" required/>

        <label className="form-label" id="quantity">Quantity</label>
        <input type= "number" required/>

        <label className="form-label" id="fill">Location</label>
        <select>
          {this.makeOptions()}
        </select>

        <button className="form-label ">Add</button>
      </form>
      </div>
    )
  }

}

export default AddItem
