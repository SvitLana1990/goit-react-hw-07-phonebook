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
  const handleClickDelete = async contact => {
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
      toast.success(`${contact.name} has been deleted from your contacts`);
    } catch (error) {
      toast.error('Ooops! Something went wrong. Try refreshing the page');
    }
  };

  return (
    <ContactList>
      {contacts.map(contact => (
        <Item
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={handleClickDelete}
        />
      ))}
    </ContactList>
  );
};
