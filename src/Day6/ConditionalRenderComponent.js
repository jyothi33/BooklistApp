import React, { useState } from "react";

const ConditionalRenderComponent = ({ name = "Jyothi S" }) => {
  let [loggedIn, setLoggedIn] = useState(false);

  return loggedIn && <div>Welcome Jyothi</div>;
  //return loggedIn ? <div>Welcome {name}</div> : <div>Welcome Guest</div>;

  //  let message

  // if(loggedIn){
  //     message = <div>Welcome Jyothi</div>
  // }
  // else{
  //     message = <div>Welcome Guest</div>
  // }

  // return message;

  //if Else condition
  // if(loggedIn){
  //     return <div>Welcome Jyothi</div>
  // }
  // else{
  //     return <div>Welcome Guest</div>
  // }

  // return (
  //   <div>
  //     <div>Welcome Jyothi</div>
  //     <div>Welcome Guest</div>
  //   </div>
  // );
};

export default ConditionalRenderComponent;
