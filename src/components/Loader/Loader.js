import { MagnifyingGlass } from 'react-loader-spinner';
import { Loader } from './Loader.styled';

export const PhoneLoader = () => {
  return (
    <Loader>
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#ecf4f7"
        color="#3f51b5"
      />
    </Loader>
  );
};
