import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      //now we gonna emit an event from or frontend;
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div class="login-box">
          <h2>Join A Room</h2>
          <form>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input
                type="text"
                name=""
                required=""
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <label>Room Id</label>
            </div>
            <button onClick={joinRoom}>Submit</button>
          </form>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
