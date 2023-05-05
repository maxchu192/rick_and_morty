import Card from './Card';
import styles from '../styles/Cards.module.css';
import axios from 'axios'
import { useSelector } from "react-redux";
import Paginate from "./Paginate";
import example from '../images/example.jpg'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../redux/actions/action';

export default function Cards({ onClose }) {
   const { characters, idU, numPage } = useSelector((state) => state);
   const dispatch = useDispatch()

   useEffect(() => {
      axios
      .get(`https://rym.up.railway.app/rickandmorty/favorites/${idU}`)
      .then(({data})=>{
         dispatch(addFavorites(data))
      }) 
   }, [])
   

   var desde = (numPage - 1) * 4;
   var hasta = numPage * 4;
   var cantPages = Math.ceil(characters.length / 4);
   var viewCharacters = characters.length < 4 ? characters : characters?.slice(desde, hasta);

   return (
      <div className={styles.card}>
         <h2>Mazo de Cartas</h2>
         <div className={styles.cards_container}>
            {
               characters.length === 0 ? <Card name='Elige una Carta' image={example} />
                  : viewCharacters && viewCharacters.map((element, index) => {
                     return (
                        <Card
                           key={index}
                           id={element.id}
                           name={element.name}
                           image={element.image}
                           onClose={onClose}
                        />)
                  })
            }
         </div>
         <Paginate cantPages={cantPages} />
      </div>);
}
