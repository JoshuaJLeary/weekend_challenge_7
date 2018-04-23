import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ReflectionList extends Component {
    render() {

        let displayReflectionList = this.props.reflectionArray.map((reflection) => {
            console.log('in ReflectionList:', this.props)
            return (
                <div>
                <h4>{reflection.topic}</h4>
                <li>{reflection.description}</li>
                <button onClick = {this.props.handleUpdatedBookmark}>Bookmark</button>
                </div>
            )
        })

        return (
            <div>
                
                <pre>{JSON.stringify(this.props.reflectionArray)}</pre>
                    {displayReflectionList}
                    
            </div>

        )
    }
}

export default ReflectionList;