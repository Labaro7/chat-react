import React from 'react'

export default class ChatDisplay extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.setState({
            messages: this.props.messages
        });
    }

    render(){
        return(
            <div className="display">     
                {this.props.messages.map((message) => <li>{message}</li>)}
            </div>
        );
    }
}