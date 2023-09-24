import React from 'react'
import { useState } from 'react';

const Chat = ({socket,room,username}) => {
  const[currentMessage,setCurrentMessage ] = useState("");
  const sendMessage = async () => {
    if(currentMessage !== ""){
      const messageData ={
        message: currentMessage,
        author:username,
        room:room,
        time:
        new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes,
      };
      await socket.emit("send_message",messageData)
    }


  }

  return (
    <div className='chat-window'>
      <div className='chat-header'>
        <p>ライブチャット</p>
      </div>
      <div className='chat-body'></div>
      <div className='chat-footer'>
        <input type='text' placeholder='メッセージ内容・・・' onChange={(e) => setCurrentMessage(e.target.value)}/>
        <button onClick={() => sendMessage()}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat