import React, { Component } from 'react';
import axios from 'axios';


class ReflectionForm extends Component {
   constructor(props) {
       super(props)
       this.state = {
           topic: '',
           description: '',
       }
   }

   handleTopic = (event) => {
       console.log('inside handleTopic', event);
       this.setState({
           topic: event.target.value,
       });
       console.log(this.state.topic)
}

handleDescription = (event) => {
    this.setState({
        description: event.target.value,
    });
    console.log(this.state.description)
}

   postReflection = (event) => {
       event.preventDefault();
       axios.post('/reflection', this.state)
       .then( (response) => {
           console.log('in POST', response);
           this.setState({
               topic: '',
               description: ''
           })
           this.props.getReflections();
       })
       .catch( (error) => {
           console.log('error in POST', error);
       })
   }

   updateBookmark = (id) => {
       console.log('button clicked!');
       axios.put('/reflection' + id)
       .then( (response) => {
           this.props.getReflections();
       })
       .catch( (error) => {
           console.log('error in bookmark PUT', error)
       })
   }

   handleUpdatedBookmark = () => {
       this.state.updateBookmark(this.props.reflectionArray.id)
   }

    render() {
        return (
            <div>
                <form onSubmit = {this.postReflection}>
                    <input placeholder = "Topic" type = "text" value = {this.state.topic} onChange = {this.handleTopic}></input>
                    <input placeholder = "Description" type = "text" value = {this.state.description} onChange = {this.handleDescription}></input>
                    <button type = "Submit">Submit</button>
                </form>
            </div>
        )
        
    }
    
}

export default ReflectionForm;