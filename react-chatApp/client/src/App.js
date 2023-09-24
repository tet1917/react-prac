
import './App.css';
import io from "socket.io-client";
import {useState} from "react";
import Chat from './Chat';

const socket = io("http://localhost:4500");

function App() {

  const[username,setUsername ] = useState("");
  const[room,setRoom] = useState("");
  const joinRoom = () => {
    if(username !== "" && room !=="") {
      socket.emit("join_room",room);
    }
  }
  return (
    <div className="App">
      <div className='joinChatContainer'>
        <h3>チャットに参加する</h3>
        <input type='text' placeholder='お名前' onChange={(e) => setUsername(e.target.value)}/>
        <input type='text' placeholder='ルーム番号' onChange={(e) => setRoom(e.target.value)}/>
        <button onClick={() => joinRoom()}>ルームに参加</button>
      </div>
      <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
