import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class DeleteEmployee extends React.Component {
	
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
		axios.delete(`/Emp/${this.state._id}`)
		.then((response) => {
			$('#del').text(response.data)
			this.props.getAllEmps();
		})
		.catch((err) => {
			$('#del').text("error in delete request")
		})
	}

	render(){	
		return (
			<div>
				<h1>Delete Employee By id</h1>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<label>Employee id : </label>
					<input type="text" name="_id" value={this.state._id}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<button>Delete Employee</button>
					<h2 id="del"></h2>
				</form>
	        </div>
	    )
	}
	
}

export default DeleteEmployee;