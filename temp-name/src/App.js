import './App.css';
import PostMessages from './components/postMessages';
import { Provider } from 'react-redux'
import { store } from './actions/store';
import { AppBar, Container, Typography } from '@material-ui/core';
import ButterToast, { POS_RIGHT, POS_TOP } from 'butter-toast'

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar color="inherit" position="static">
          <Typography align="center" variant="h2">
            Post Box
          </Typography>
        </AppBar>
        <PostMessages />
        <ButterToast position={{vertical: POS_TOP, horizental: POS_RIGHT}}/>
      </Container>
    </Provider>
  );
}

export default App;
