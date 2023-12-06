import { useEffect, useState } from "react";
import "./App.css";
import socket from "./server";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    askUserName();
  }, []);
  const askUserName = () => {
    const userName = prompt("Please Text your Name");
    console.log("uuu", userName);

    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };

  return (
    <div>
      <div className="App"></div>
    </div>
  );
}

export default App;
