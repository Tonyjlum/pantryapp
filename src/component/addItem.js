import React, { Component} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Const from "../const.js"

class AddItem extends Component {
  state = {
    name: "",
    quantity: 0,
    locations: ["t1","t2"],
    currentlocation: null,
  }

  handleChange = (e) => {
    console.log(e.target.id)
    this.setState({
      [e.target.id]: e.target.value
    }, function () { console.log(this.state)})
  }

  makeOptions = () => {
    return this.state.locations.map( loc => {
      return <option key={loc} id="currentlocation">{loc}</option>
    })
  }

  componentDidMount(){
    fetch(`${Const.ENDPOINT}/location`)
    .then( resp => resp.json())
    .then( locations => {
      this.setState({
        locations: locations.map(loc => loc.name),
        currentlocation: locations[0].name
      })
    })
  }

  //set up redux to handle returned item and update store


  render(){
    return (
      <div>
      <form onChange={this.handleChange}>
        <label className="form-label" >Name</label>
        <input type= "text" id="name" value={this.state.name}required/>
        <label className="form-label" id="quantity">Quantity</label>
        <input type= "number" id="quantity" required/>
        <label className="form-label" >Location</label>
        <select id="currentlocation">
          {this.makeOptions()}
        </select>
        <button className="form-label ">Add</button>
      </form>
      </div>
    )
  }

}

export default AddItem
