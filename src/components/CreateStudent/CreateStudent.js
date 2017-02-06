import React from 'react';
import './CreateStudent.css';


export default class CreateStudent extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.create=this.create.bind(this);
    }

create(){
    console.log("****************create clicked**********");
}

    render(){
        return (
            <div className="create-student">
            <h1> Create Student</h1>
               <div >{this.state.error}</div>
              <form>
                <label>Email Address</label>
                <input type="email" ref={n => this.email=n}/>
                <button onclick={this.create}>Create</button>
              </form>
            </div>
        );
    }
}