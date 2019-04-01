import React, { Component } from 'react';
class EditQuestion extends Component {
  state = {
      title :   this.props.question.title 
  }


  onChange = (e) => {
      this.setState({title : e.target.value})
    
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.new(this.state.title) ;
    }
    
    render() {
        console.log(this.state.title)
    return (
        <form onSubmit={this.onSubmit}>
            <input type="text" 
             style = {{textAlign: 'center',  
             fontSize : '25px' ,
             padding : '10px 10px 10px 10px',
             background : '#C3C3E5',
             color : '#443266',
             borderWidth:'0px'}}
            value ={this.state.title}
             onChange = {this.onChange}/>
        </form>
    );
  }
}


export default EditQuestion;
