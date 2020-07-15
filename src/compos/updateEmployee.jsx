import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class UpdateEmployee extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			_id : 0,
		}
	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		var se = $('select').val();
		var inp = $('#inpChange').val();
		var o = {};
		o[se] = inp;
		console.log(o)
		axios.put(`/Employee/${this.state._id}`, o)
		.then((response) => {
			$('#update').text(response.data + " " + this.state._id + " " + se)
			this.props.getAllEmps();
		})
		.catch((err) => {
			$('#update').text("error in put request")
		})
	}

	render(){	
		return (
			<div>
				<h1>Update Employee By id</h1>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<label>Employee id : </label>
					<input type="text" name="_id" value={this.state._id}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<label>Employee property you want to change : </label>
					<select id="updF">
						<option value="name">name</option>
					    <option value="gender">gender</option>
					    <option value="email">email</option>
					    <option value="phoneNumber">phoneNumber</option>
					</select><br/><br/>
					<input type="text" id="inpChange"/>
					<br/>
					<br/>
					<button>Update Employee</button>
					<h2 id="update"></h2>
				</form>
	        </div>
	    )
	}
	
}

export default UpdateEmployee;