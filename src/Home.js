import React, { Component } from 'react';
import AddTransaction from "./Components/AddTransaction/AddTransaction"


class Home extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div> <AddTransaction/> </div>
               
            </div>
        );
    }
}

export default Home;