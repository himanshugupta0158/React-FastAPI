import React, { useEffect, useState } from "react";


const App = () => {

  const [message, setMessage] = useState("");

  const getWelcomeMessage = async () => {
    const requestOptions = {
      method : "GET",
      headers : {
        "Content-type" : "application/json"
      },
    };
    const response = await fetch("/api", requestOptions);
    const data = await response.json();

    if(!response.ok) {
      console.log("Something messed up");
    }
    else{
      setMessage(data.message)
      console.log(data);
    }

  }

  useEffect(() => {
    getWelcomeMessage();
  }, []);
  
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;