import logo from './logo.svg';
import './App.css';
import {Container} from '@maetrial-ui/core'
//redux
import { store } from './actions/store'
import { Provider } from 'react-redux';
import Candidates from './components/Candidates';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
      <Candidates />
      </Container>
    </Provider>
  );
}

export default App;
