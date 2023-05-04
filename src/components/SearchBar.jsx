import { useState } from "react";
import styles from '../styles/Search.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState()
   
   function handleChange (event) {
      setId(event.target.value)
   }

   function search () {
      let idRandom = Math.floor(Math.random() * 826)
      onSearch(idRandom)
   }   
   
   return (
      <div className={styles.search}>
         <input type='search' value={id} onChange={handleChange} placeholder='0'/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
         <button onClick={search}>Ramdon</button>
      </div>
   );
}
