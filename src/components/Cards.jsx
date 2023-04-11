import Card from './Card';
import style from '../styles/Cards.module.css';
import { useSelector } from "react-redux";
import Paginate from "./Paginate";

export default function Cards({ onClose}) {
   const { characters } = useSelector((state) => state);
   const { numPage } = useSelector((state) => state);
   let desde = (numPage - 1) * 4;
   let hasta = numPage * 4;
   let cantPages = Math.floor(characters.length / 4);
   let viewCharacters = characters?.slice(desde, hasta);

   return (
      <div>
         <div className={style.cards_container}>
            {
               viewCharacters && viewCharacters.map((element, index) => {
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
         <Paginate cantPages={cantPages}/>
      </div>);
}
