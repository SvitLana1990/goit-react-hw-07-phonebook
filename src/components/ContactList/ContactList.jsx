import { Item } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectFilteredContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { toast } from 'react-hot-toast';

export const List = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ContactList>
      {contacts.map(contact => (
        <Item
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={() => {
            dispatch(deleteContact(contact.id));
            toast.error(`${contact.name} has been deleted from your contacts`);
          }}
        />
      ))}
    </ContactList>
  );
};
