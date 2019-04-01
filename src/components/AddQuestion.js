import React, { Component } from 'react';
class AddQuestions extends Component {
    state = {
        title : '' 
    }
    KerdesHozzaadas = (e) => {
        this.setState({title : e.target.value})

    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addQuestion(this.state.title);
        this.setState({title : ''});

    }
  render() {
    return (
        <form onSubmit = {this.onSubmit} style={{display : 'flex'}}>
            <input type="text"
            name = "title"
            placeholder ="Kérdés hozzáadása..."
            value = {this.state.title}
            onChange = {this.KerdesHozzaadas}
            style = {{flex : "10"}}
            />
            <input type ="submit"
            value = "Hozzáadás" 
            className = 'BtnSubmit'/>

        </form>
    );
  }
}


export default AddQuestions;
