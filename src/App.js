import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import ContactCard from "./Components/ContactCard";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1em;
  width: 20em;
`;

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=16")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <Wrapper>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.login.salt}
          avatar={contact.picture.large}
          age={contact.dob.age}
          name={contact.name.last + ", " + contact.name.first}
          email={contact.email}
          mobile={contact.cell}
          phone={contact.phone}
          location={contact.location}
        />
      ))}
    </Wrapper>
  );
};

export default App;
