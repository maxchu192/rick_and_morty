import { useState } from "react";
import styles from '../styles/Search.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={styles.search}>
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
