// AboutHari.js
import React from 'react';

function AboutHari() {
  return (
    <div>
      <h1>About Hari</h1>
      <p>Krisanahari Siva (s3941378):</p>
      <ul>
        <li>Created base backend code (without microservices)</li>
        <li>Created a development branch to store minor fixes during merger with feature branches</li>
        <li>Re-formatted backend code with three new microservices</li>
        <ul>
          <li>Product Service</li>
          <li>User Service</li>
          <li>Delivery Service</li>
        </ul>
        <li>Each microservice has its spring boot application with h2, JDBC, flyway and more set up for feature implementation</li>
        <li>Re-formatted CI for the three microservices (so it tests all three when pushed into respective branches)</li>
        <li>Fixed minor CI fail error caused by flyway migration</li>
        <li>Created fail and pass tests for repository in Product Service microservice</li>
        <li>Implemented repository by finding the best price between all stores for each product in the database</li>
        <li>Created fail and pass tests for servicer and controller for Product Service</li>
        <li>Implemented Servicer and Controller which passes the results from the repository to the controller into a GET response</li>
        <li>Fixed flyway issues during build</li>
        <li>Updated repository for Product Service to include image path for each product in the database, allowing the front end to navigate and display each product image accordingly</li>
      </ul>
    </div>
  );
}

export default AboutHari;