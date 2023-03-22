import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail.jsx';

function App() {
   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            let exist = characters.find((ch) => ch.id === data.id);
               if(exist){
                  alert("ya existe");
               } else {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id) {
      setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id)      
   })
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='about' element={<About />} />
            <Route path='details/:id' element={<Detail />} />
         </Routes>
         
      </div>
   );
}

export default App;
