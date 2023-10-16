import React, { useContext, useEffect, useState } from "react";

import Register from "./components/Register";
// import Login from "./components/Login";
// import Header from "./components/Header";
// import Table from "./components/Table";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [message, setMessage] = useState("");
  const [token] = useContext(UserContext);

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      console.log("something messed up");
    } else {
      setMessage(data.message);
    }
  };

  useEffect(() => {
    getWelcomeMessage();
  }, []);

  return (
    <>
      Hello {message}

      <Register />

    </>
  );
};

export default App;