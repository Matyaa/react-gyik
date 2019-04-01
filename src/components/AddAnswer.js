import React, { Component } from 'react';
class AddAnswer extends Component {
    state = {
        title : '' 
    }
    ValaszHozzaadas = (e) => {
        this.setState({title : e.target.value})

    }
    onSubmit = (e) => {
        
        this.props.addAnswer(this.state.title);
        this.setState({title : ''});

    }
  render() {
    return (
        <form onSubmit = {this.onSubmit} style={{display : 'flex'}}>
            <input type="text"
            name = "title"
            placeholder ="Válasz hozzáadása..."
            value = {this.state.title}
            onChange = {this.ValaszHozzaadas}
            style = {{flex : "10",fontSize : '25px'}}
            />
            <input type ="submit"
            value = "Hozzáadás" className = 'BtnSubmit'/>

        </form>
    );
  }
}


export default AddAnswer;