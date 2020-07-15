import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class AddEmployee extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			name : "",
			_id : 0,
			gender : "",
			email : "",
			phoneNumber : 0
		}
	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		axios.post("/addEmp", {
			name : this.state.name,
			_id :  this.state._id,
			gender :this.state.gender,
			email : this.state.email,
			phoneNumber : this.state.phoneNumber
		})
		.then((response) => {
			$('#add').text(`${response.data}`)
			this.props.getAllEmps();
		})
		.catch((err) => {
			$('#add').text("error in post request")

		})
	}

	render(){	
		return (
			<div>
				<h1>Add Employee</h1>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<label>Employee name : </label>
					<input type="text" name="name" value={this.state.name}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<label>Employee id : </label>
					<input type="text" name="_id" value={this.state.id}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<label>Employee gender : </label>
					<input type="text" name="gender" value={this.state.gender}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<label>Employee email : </label>
					<input type="text" name="email" value={this.state.email}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<label>Employee phone number : </label>
					<input type="text" name="phoneNumber" value={this.state.phoneNumber}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<button>Add Employee</button>
					<h2 id="add"></h2>
				</form>
	        </div>
	    )
	}
	
}

export default AddEmployee;