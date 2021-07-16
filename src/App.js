import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactCard from "./Components/ContactCard";

const Wrapper = styled.div`
  padding: 1em;
`;

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
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
          avatar={contact.picture.large}
          age={contact.dob.age}
          name={contact.name.last + ", " + contact.name.first}
        />
      ))}
    </Wrapper>
  );
};

export default App;
