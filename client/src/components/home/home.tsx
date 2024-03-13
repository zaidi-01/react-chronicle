import React, { useEffect } from "react";

function Home() {
  const [ message, setMessage ] = React.useState("");

  // TODO: Replace with componentDidMount
  // TODO: Add HomeData model
  useEffect(() => {
    fetch("http://localhost:3002/homeData")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  });

  return <div className="home">
    <h2>Welcome to the Blog!</h2>
    <p>{message}</p>
  </div>
}

export default Home;
