import React from "react";
import axios from "axios";
  
class ExpenseData extends React.Component {
    state = {
       
        item:"",
        date:"",
        category:"",
        cost:""
    };

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value,

        });

    }
    handleSubmit(e){
        e.preventDefault();
        const {item,date,category,cost}=this.state; 
        axios.post("http://localhost:4000/user",{
            item:this.state.item,
            category:this.state.category,
            date:this.state.date,
            cost:this.state.cost
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
            <h2>Your </h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Item</label>
                <input type="text" name="item" value={this.state.item}
                 onChange={this.handleChange.bind(this)}/>
                <label>Category</label>
                <input type="text" name="category" value={this.state.category} 
                 onChange={this.handleChange.bind(this)}/>
                
                <label>Cost</label>
                <input type="number" name="cost" value={this.state.cost}
                 onchange={this.handleChange.bind(this)}/>

                <label>Cost</label>
                <input type="date" name="date" value={this.state.date}
                  onchange={this.handleChange.bind(this)}/>
                <br/><br/>
                <button>Add New Expense</button>
                
                
            </form>
        
           

            </div>
            ); 
    }
}
export default ExpenseData;