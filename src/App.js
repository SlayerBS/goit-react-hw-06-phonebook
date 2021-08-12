import React, { Component } from "react";
import ContactList from "./components/ContactList";
import { connect } from "react-redux";
import actions from "./redux/contacts/actions";
import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";

class App extends Component {
  // componentDidMount() {
  //   const contactsFromLocalStorage = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contactsFromLocalStorage);

  //   if (parsedContacts) {
  //     this.props.getContacts(parsedContacts);
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
