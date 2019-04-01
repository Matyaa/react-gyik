import React, { Component } from 'react';
class Answer extends Component {

  state = {
    title : this.props.answer.title 
}
ValaszSzerk = (e) => {
    this.setState({title : e.target.value})

}
onSubmit = (e) => {
    e.preventDefault();
    this.props.edit(this.state.title,this.props.answer.id);
    

}

  render() {  
    return (
        <form className='AnswerStyle' onSubmit = {this.onSubmit}>

            <input type="text" 
            style = {{flex : '8' , background : '#252769' ,color : '#F1F0FF',borderWidth : '0px',paddingRight:''}} 
            value = {this.state.title}
            onChange = {this.ValaszSzerk}/>
            
            <input type="submit" 
            className = 'Btn' 
            onClick = {this.props.edit}
            value = 'Szerkesztés'/>
            
            <button onClick = {this.props.delAnswer.bind(this,this.props.answer.id)} 
            className='Btn' > Törlés</button>  
            </form>  

                  
    );
  }
}


export default Answer;