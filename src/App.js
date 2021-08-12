import React, { Component } from "react";
import ContactList from "./components/ContactList";

import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";

class App extends Component {
  // state = {
  //   contacts: [
  //     // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('App componentDidUpdate');

  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     console.log("Обновилось поле Contacts, записываю Contacts в хранилище");
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }
  // }

  // handleFilter = (filter) => this.setState({ filter });

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
