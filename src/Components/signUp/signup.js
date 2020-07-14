import React from "react";
import axios from "axios";
  
class AddUser extends React.Component {
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
    };

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,

        });

    }
    handleSubmit(e){
        e.preventDefault();
        const{firstname,lastname,email,password}=this.state; 
        axios.post("http://localhost:4000/user",{
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        })
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
        <div> 
            <h1> Expenses Tracker </h1>
            <h2>Create New Account </h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>First Name</label>
                <input type="text" name="firstname" value={this.state.firstname}
                 onChange={this.handleChange.bind(this)}/>

                <label>Last Name</label>
                <input type="text" name="lastname" value={this.state.lastname} 
                 onChange={this.handleChange.bind(this)}/>

                 <label>E-mail</label>
                <input type="email" name="email" value={this.state.email}
                 onChange={this.handleChange.bind(this)}/>
                
                <label>Password</label>
                <input type="password" minLength="8" required/><br/><br/>
                <button>Sign Up</button>
                
                
            </form>
        
           

            </div>
            ); 
    }
}
export default AddUser;