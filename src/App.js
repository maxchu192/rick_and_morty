import styles from './styles/App.module.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Login from './components/Login.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites.jsx';
import Footer from './components/Footer';
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, searchCharacter } from "./redux/actions/action.js";


function App() {
   const { characters } = useSelector((state) => state);
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [access, setAccess] = useState(false);
   const EMAIL = 'eje@mail.com';
   const PASSWORD = '@Model101';

   useEffect(() => {
      axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((results) => {
         dispatch(addCharacters(results.data.results));
      });
   }, []);

   function login(inputs) {
      if (inputs.password === PASSWORD && inputs.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };

   function logout() {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [navigate, access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         dispatch(searchCharacter(data));
      });
   }
   function onClose(id) {
      const filterCharacters = characters.filter((ch) => ch.id !== id);
      dispatch(addCharacters(filterCharacters));
   }
   return (
      <div className={styles.app}>
         {
            location.pathname === "/" ? null : (<Nav logout={logout} onSearch={onSearch} />)
         }
         <Routes>
            <Route path='/' element={<Login login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
