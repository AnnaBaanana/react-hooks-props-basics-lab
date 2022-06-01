import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <div>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    </div>
  )
}

function About(props) {
  const bio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio.length>0 && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/AnnaBaanana" linkedin="https://github.com/AnnaBaanana" />
    </div>
  );
}

export default About;
