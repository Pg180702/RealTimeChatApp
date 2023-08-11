
import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket=io.connect("http://localhost:3001");
function App() {
  const [username,setUsername]=useState("");
  const [room,setRoom]=useState("");
  const [showChat,setShowChat]=useState(false);

  const joinRoom=()=>{
    if(username!=="" && room!=="")
    {
      //now we gonna emit an event from or frontend;
      socket.emit("join_room",room);
      setShowChat(true); 
    }
  }
  return (
 
    <div className="App">
       {!showChat ? 
    (
      <div className='joinChatContainer'>
      <h3>Join A Room</h3>
      <input type='text' placeholder='john' onChange={(event)=>{setUsername(event.target.value)}}/>
      <input type='text' placeholder='room id' onChange={(event)=>{setRoom(event.target.value)}}/>
      <button onClick={joinRoom}>Join a room</button>
      </div>
    )
    : (
      <Chat socket={socket} username={username} room={room}/>
    )}
    </div>
  );
}

export default App;
