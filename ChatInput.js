import {useState} from 'react'

export default function ChatInput(props){
    let [message, setMessage] = useState("");

    function handleChange(event){
       setMessage(event.target.value);
    }

    function handleEnter(event){
        if(event.key === 'Enter'){
            props.handleInput(message);
            setMessage("");
        }
    }

    return(
        <input className="userInput" placeholder="Write your message" value={message} onChange={handleChange} onKeyDown={handleEnter}></input>
    );
}