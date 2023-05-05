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
import { addCharacters, searchCharacter, id } from "./redux/actions/action.js";


function App() {
   const { characters, idU } = useSelector((state) => state);
   const location = useLocation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [access, setAccess] = useState(false);

   function login(user) {
      axios
         .put(`https://rym.up.railway.app/rickandmorty/login`, user)
         .then(({ data }) => {
            if (data.access) {
               setAccess(data.access);
               dispatch(id(data.id))
               navigate("/home");
               return alert("Welcome to our App");
            } else {
               return alert("invalid user");
            }
         });
   };

   function logout() {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [navigate, access]);

   function onSearch(idC) {
      axios.get(`https://rym.up.railway.app/rickandmorty/character/${idC}`)
         .then(({ data }) => {
            dispatch(searchCharacter(data));
         });
   }
   function onClose(idC) {
      const filterCharacters = characters.filter((ch) => ch.id !== idC);
      dispatch(addCharacters(filterCharacters));
   }
   return (
      <div className={styles.app}>
         {
            location.pathname === "/" ? null : (<Nav logout={logout} onSearch={onSearch} />)
         }
         <Routes>
            <Route path='/' element={<Login login={login} />} />
            <Route path='/home' element={<Cards onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites onClose={onClose} />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
