import React from 'react'
import ChatInput from './ChatInput'
import ChatDisplay from './ChatDisplay'

export default class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message1: "",
            message2: "",
            messages: [""]
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(message){
        let date = new Date;
        this.setState((prevState) => { return({
            message1: "",
            message2: "",
            messages: [...prevState.messages, date.getHours() + ": " + date.getMinutes() + " " + message]
        })
        }, () => console.log(this.state.messages));
    }

    render(){
        return(
            <div className='chat'>
                <ChatDisplay messages={this.state.messages}/>
                <ChatInput handleInput={this.handleInput}/>
            </div>
        );
    }
}