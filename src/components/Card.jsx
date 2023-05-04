import style from "../styles/Card.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from '../redux/actions/action.js';


export default function Card(props) {
   const { id, name, image, onClose } = props;
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const { myFavorites, idU } = useSelector((s) => s);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav({idC: id, id: idU}));
      } else {
         setIsFav(true);
         dispatch(addFav(id, idU));
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      })
   }, [myFavorites]);

   function superClouse() {
      onClose(id);
      dispatch(removeFav({idC: id, id: idU}));
   }

   var prueba = 'Elige una Carta'

   return (
      <div className={style.card}>
         {
            name === prueba ? null
            : (<div className="buttons">
               {
                  isFav ? <button onClick={handleFavorite}>❤️</button>
                  : <button onClick={handleFavorite}>🤍</button>
               }
               <button onClick={superClouse}>X</button>
            </div>)            
         }
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         <img className={style.zoom} src={image} alt={name} />
      </div>
   );
}
