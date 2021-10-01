
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

//import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const [listOfUser, setlistOfUser] = useState([]);
   useEffect(() => {
     const getUser = async () => {
       try {
         const { data } = await axios.get(
           "https://jsonplaceholder.typicode.com/users"
         );
         setlistOfUser(data);
       } catch (error) {
         console.log(error);
       }
     };
     getUser();
   }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {listOfUser.map((user) => (
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.address.city}</Card.Text>
            <Card.Text>{user.website}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
