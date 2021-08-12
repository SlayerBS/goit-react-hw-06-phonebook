import { connect } from "react-redux";
import PropTypes from "prop-types";
import actions from "../../redux/contacts/actions";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        <span>
          {contact.name}:{contact.number}
        </span>
        <button onClick={() => onDelete(contact.id)} className={styles.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(actions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
