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
    return ( <div className='AnswerStyle'>
        <form  onSubmit = {this.onSubmit}  style = {{flex : '15'}}>

            <input type="text" 
            style = {{background : '#513580' ,
            color : '#F1F0FF',borderWidth : '0px', 
            fontWeight:'bold',paddingLeft:"15px",
            fontSize : "20px",
            paddingTop : '15px',paddingBottom:"15px",width:'97%'}} 
            value = {this.state.title}
            onChange = {this.ValaszSzerk}/>
            
            
            </form>  
            <button onClick = {this.props.delAnswer.bind(this,this.props.answer.id)} 
            className='Btn' > Törlés</button>  
           </div>

                  
    );
  }
}


export default Answer;