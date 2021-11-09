import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import DataLoader from './components/DataLoader';

function App() {
  return (
    <div className="App-header">
        <Button></Button>
        <DataLoader
          /* render={data => {
            return (
              <div>
                <ul>
                  {data.map(el => (
                    <li key={el.id}>{el.title}</li>
                  ))}
                </ul>
              </div>
            );
          }} */
        />
    </div>
  );
}

export default App;
