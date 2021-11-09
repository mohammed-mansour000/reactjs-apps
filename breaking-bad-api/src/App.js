import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';

function App() {
  const [items, setitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
      const fetchItem = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

          console.log(result.data)
          setitems(result.data)
          setIsLoading(false)
      }     
      fetchItem()   
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => {setQuery(q)}} />
      <CharacterGrid isLoading={isLoading} items={items}/> 
    </div>
  );
}

export default App;
