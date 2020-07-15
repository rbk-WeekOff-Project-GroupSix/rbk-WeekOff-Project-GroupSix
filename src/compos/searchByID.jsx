import React from 'react';
import axios from 'axios';
import $ from 'jquery';

class SearchEmployee extends React.Component {
	
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
		axios.get(`/Employee/${this.state._id}`)
		.then((response) => {
			console.log(response.data)
			if (response.data.length === 0) {
				$('#search').show();
				$('#search').text("There is no data matched")
				$('#tbl2').hide();
			} else {
				$('#search').hide();
				$('#tbl2').show();
				$('#tbl2')[0].innerText="";
				$('#tbl2').append("<tr><th>Employee id</th><th>Employee name</th><th>Employee gender</th><th>Employee email</th><th>Employee phone number</th></tr>")
				for(var i in response.data){
					$('#tbl2').append(`<tr><td>${response.data[i]._id}</td><td>${response.data[i].name}</td><td>${response.data[i].gender}</td><td>${response.data[i].email}</td><td>${response.data[i].phoneNumber}</td></tr>`)
				}
			}
		})
		.catch((err) => {
			$('#search').text("error in get request")
		})
	}

	render(){	
		return (
			<div>
				<h1>Search Employee By id</h1>
				<form onSubmit = {this.handleSubmit.bind(this)}>
					<label>Employee id : </label>
					<input type="text" name="_id" value={this.state._id}
					onChange={this.handleChange.bind(this)}/>
					<br/>
					<br/>
					<button>Find Employee</button>
					<h2 id="search"></h2>
					<table id = "tbl2">
        			</table><br/>
				</form>
	        </div>
	    )
	}
	
}

export default SearchEmployee;