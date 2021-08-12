import React, { Component } from "react";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}

export default App;
