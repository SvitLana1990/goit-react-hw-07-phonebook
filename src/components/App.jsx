import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Container, Title, TitleContacts } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { PhoneLoader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <SearchBar />
      {isLoading && !error && <PhoneLoader />}
      {contacts.length > 0 ? <List /> : <p>No contacts available</p>}
      <Toaster />
      <GlobalStyle />
    </Container>
  );
};
