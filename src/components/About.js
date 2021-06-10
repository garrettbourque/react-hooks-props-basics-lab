import React from "react";
import Links from "./Links"

function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {!props
      ?<p>{props.bio}</p>
      :<p></p>
      }
      
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links}/>
    </div>
  );
}

export default About;
