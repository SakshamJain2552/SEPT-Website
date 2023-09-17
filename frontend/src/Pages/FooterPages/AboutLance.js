// AboutLance.js
import React from 'react';

function AboutLance() {
  return (
    <div>
      <h1>About Lance</h1>
      <p>Lance Belen (s3944846):</p>
      <ul>
        <li>Created base backend code</li>
        <li>Restructured base backend code</li>
        <li>Created separate directories for microservices for implementation of its separate spring boot application</li>
        <li>Created base code for User Service</li>
        <li>Implemented repository and model for User Service feature Sign-in</li>
        <li>Created fail and pass tests for repository in User Service microservice, specifically for the sign-in feature</li>
        <li>Implemented repository by finding the given username and password in the database</li>
        <li>Created fail and pass tests for service and controller in User Service microservice, specifically for the sign-in feature</li>
        <li>Implemented service and controller to pass the result from the repository to the controller</li>
        <li>Implemented a POST method in the controller for handling the user’s credentials</li>
      </ul>
    </div>
  );
}

export default AboutLance;