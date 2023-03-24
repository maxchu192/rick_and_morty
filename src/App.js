import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Login from './components/Login.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
         {
            location.pathname === "/" ? null : (<Nav onSearch={onSearch} />)
         }
         <Routes>
            <Route path='/' element={<Login login={login}/>} ></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/details/:id' element={<Detail />} />
         </Routes>
         
      </div>
   );
}

export default App;
