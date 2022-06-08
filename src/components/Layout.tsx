import { ReactElement } from 'react';
import { Container } from '@mui/material';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = (props: Props): ReactElement => {
  return (
    <Container maxWidth="md">
      <h1>[Layout Placeholder]</h1>
      {props.children}
    </Container>
  );
};

export default Layout;
